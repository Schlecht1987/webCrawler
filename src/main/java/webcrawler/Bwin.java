package webcrawler;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.logging.Level;

import main.Main;
import mapping.Begegnung;
import mapping.Quote;
import mapping.Spieltyp;
import mapping.Wettanbieter;

import org.hibernate.Session;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

// TODO: Auto-generated Javadoc
/**
 * The Class Bwin.
 */
public class Bwin {

    /** The wettanbieter. */
    private final String WETTANBIETER = "Bwin";

    /** The logger. */
    private final Logger logger       = LoggerFactory.getLogger(Bwin.class);

    /**
     * Instantiates a new bwin.
     */
    public Bwin() {

    }

    //------------------------------------CRAWL BEGEGNUNG INFOS--------------------------------------
    /**
     * Crawl.
     *
     * @param url the url
     * @param spieltyp the spieltyp
     */
    public void crawl(String url, String spieltyp) {
        logger.info("start crawling :" + spieltyp + "........");
        try {
            crawlInfos(url, spieltyp);
        } catch (Exception e) {
            logger.error("Fail to Crawl the following URL: " + url);
            e.printStackTrace();
        }
        logger.info("finished crawling :" + spieltyp);
    }

    private Date getDateFromCrawlInfosString(String date ,String urhzeit) {
        Date d;
        SimpleDateFormat formatter = new SimpleDateFormat("dd.MM.yyyy HH:mm");
        try {
            d = formatter.parse(splitDateFromCrawlInfos(date)+" "+urhzeit);
        } catch (ParseException e) {
            logger.debug("CONVERT ERROR can not convert " + date + " to Date");
            Calendar c1 = GregorianCalendar.getInstance();
            c1.set(1753, Calendar.JANUARY, 01);
            d = new Date(c1.getTimeInMillis());
        }
        return d;
    }

    private static String splitDateFromCrawlInfos(String date) {
        int index = date.indexOf("-");
        return date.substring(index + 2);
    }

    /**
     * Gets the infos.
     *
     * @param url the url
     * @param spieltyp the spieltyp
     * @return the infos
     */
    private void crawlInfos(String url, String spieltyp) {
        WebDriver driver = new HtmlUnitDriver();
        driver.get(url);
        for (int i = 1; i <= driver.findElements(By.xpath(XPath.getAnzahlSpieltage())).size(); i++) {
            String date = driver.findElements(By.xpath(XPath.getSpieltag(i))).get(0).getText();
            for (int j = 1; j <= driver.findElements(By.xpath(XPath.getAnzahlSpiele(i))).size(); j++) {
                String uhrzeit = driver.findElements(By.xpath(XPath.getUhrzeit(i, j))).get(0).getText();
                WebCrawler.dbmanage.saveCrawledInfo(getInfos(XPath.getBegegnung(i, j), driver, date, spieltyp, uhrzeit));
            }
        }
        driver.quit();
    }

    /**
     * Gets the infos.
     *
     * @param xpath the xpath
     * @param d the d
     * @param date the date
     * @param spieltyp the spieltyp
     * @return the infos
     */
    private CrawlInfos getInfos(String xpath, WebDriver d, String date, String spieltyp,String uhrzeit) {
        CrawlInfos b = new CrawlInfos();
        b.setErsteMannschaft(d.findElements(By.xpath(xpath + XPath.getErsteMannschaft())).get(0).getText());
        b.setHeimMannschaftQuote(d.findElements(By.xpath(xpath + XPath.getErsteMannschaftQuote())).get(0).getText());
        b.setUnentschiedenQuote(d.findElements(By.xpath(xpath + XPath.getUnentschiedenQuote())).get(0).getText());
        b.setZweiteMannschaft(d.findElements(By.xpath(xpath + XPath.getZweiteMannschaft())).get(0).getText());
        b.setZweiteMannschaftQuote(d.findElements(By.xpath(xpath + XPath.getZweiteMannschaftQuote())).get(0).getText());
        b.setDate(getDateFromCrawlInfosString(date,uhrzeit));
        b.setSpieltyp(spieltyp);
        b.setWettanbieter(this.WETTANBIETER);
        logger.info("match found: " + b.print());
        return b;
    }

    //---------------------------CRAWL ERGEBNIS-------------------------

    public void crawlErgebnisse(String url, String spieltyp) {
        logger.info("start crawling results from :" + spieltyp + "........");
        try {
            crawlErgebnisse(url);

        } catch (Exception e) {
            logger.error("Fail to Crawl the following URL: " + url);
            e.printStackTrace();
        }
        logger.info("finished crawling results from :" + spieltyp + "........");
    }

    private void crawlErgebnisse(String url)  {
        WebDriver driver = new HtmlUnitDriver();
        driver.get(url);
        for (int i = 1; i <= driver.findElements(By.xpath(XPath.getAnzahlErgebnise())).size(); i++) {
            String date = driver.findElements(By.xpath(XPath.getEregebnisTag(i))).get(0).getText();
            for (int j = 1; j <= driver.findElements(By.xpath(XPath.getAnzahlErgebnis(i))).size(); j++) {
                String mannschaften = driver.findElements(By.xpath(XPath.getErgebnisMannschaften(i, j))).get(0).getText();
                String tore = driver.findElements(By.xpath(XPath.getErgebnisTore(i, j))).get(0).getText();
                String uhrzeit = driver.findElements(By.xpath(XPath.getErgebnisUhrzeit(i, j))).get(0).getText(); 
                WebCrawler.dbmanage.saveCrawlErgebnis(makeCrawlErgebnis(mannschaften, tore, date, uhrzeit));
            }
        }
        driver.close();
    }

    private CrawlErgebnis makeCrawlErgebnis(String mannschaften, String tore, String date,String uhrzeit)  {
        CrawlErgebnis ce = new CrawlErgebnis();
        ce.setMannschaft_1(splitErgebnisMannschaf_1(mannschaften));
        ce.setMannschaft_2(splitErgebnisMannschaf_2(mannschaften));
        String halbzeitErg = "0:0";
        String gesamtErg = "0:0";
        
        if(tore.contains("Verschoben")){
            logger.info("match verschoben: try to delete match");
            WebCrawler.dbmanage.deleteBegegnung(splitErgebnisMannschaf_1(mannschaften),splitErgebnisMannschaf_2(mannschaften),getDateFromCrawlErgebnisString(date,uhrzeit));
            ce.setDate(getDateFromCrawlErgebnisString(date,uhrzeit));
            return ce;
        }
        
        if(tore.contains("(")){
             halbzeitErg = splitHalbzeitErgebnis(tore);
             gesamtErg = splitGesamtErgebnis(tore);
        
        }else if(tore.length()<6){
            halbzeitErg = tore;
            gesamtErg = tore;        
        }
        ce.setH_tore_1(getToreM1(halbzeitErg));
        ce.setH_tore_2(getToreM2(halbzeitErg));
        ce.setTore_1(getToreM1(gesamtErg));
        ce.setTore_2(getToreM2(gesamtErg));
        ce.setDate(getDateFromCrawlErgebnisString(date,uhrzeit));
        if (ce.getTore_1() > ce.getTore_2()) {
            ce.setSieger("1");
        } else if (ce.getTore_1() == ce.getTore_2()) {
            ce.setSieger("x");
        } else {
            ce.setSieger("2");
        }
        logger.info("found result:  "+ce.print()); 
      return ce;
    }

    private String splitDateFromErgebnisString(String date) {
        int index = date.indexOf(",");
        return date.substring(index + 1);
    }

    private Date getDateFromCrawlErgebnisString(String date,String uhrzeit) {
        Date d;
        SimpleDateFormat formatter = new SimpleDateFormat("dd. MMMM yyyy HH:mm");
        try {
            d = formatter.parse(splitDateFromErgebnisString(date)+" "+uhrzeit);
        } catch (ParseException e) {
            logger.error("CONVERT ERROR can not convert " + date + " to Date");
            Calendar c1 = GregorianCalendar.getInstance();
            c1.set(1753, Calendar.JANUARY, 01);
            d = new Date(c1.getTimeInMillis());
        }
        return d;
    }
    


    private String splitHalbzeitErgebnis(String erg) {
        int index = erg.indexOf("(");
        return erg.substring(index + 1).replace(")", "");
    }

    private String splitGesamtErgebnis(String erg) {

            int index = erg.indexOf("(");
            return erg.substring(0, index - 1);

    }

    private String splitErgebnisMannschaf_1(String erg) {
        int index = erg.indexOf(" -");
        return erg.substring(0, index - 0);
    }

    private String splitErgebnisMannschaf_2(String erg) {
        int index = erg.indexOf(" -");
        return erg.substring(index + 3);
    }

    private int getToreM1(String s) {
        int index = s.indexOf(":");
        try {
            Integer tore = new Integer(s.substring(0, index));

            return tore;
        } catch (Exception e) {
            logger.error("Fail to parse Tore to String: Try to parse: " + s.substring(0, index - 1));
            return -1;
        }

    }

    private int getToreM2(String s) {
        int index = s.indexOf(":");
        try {
            Integer tore = new Integer(s.substring(index + 1));
            return tore;
        } catch (Exception e) {
            logger.error("Fail to parse Tore to String: Try to parse: " + s.substring(0, index + 1));
            return -1;
        }

    }

}
