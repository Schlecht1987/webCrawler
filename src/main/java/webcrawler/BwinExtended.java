package webcrawler;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BwinExtended {

    /** The wettanbieter. */
    private final String WETTANBIETER = "Bwin";

    /** The logger. */
    private final Logger logger       = LoggerFactory.getLogger(BwinExtended.class);

    /**
     * Instantiates a new bwin.
     */
    public BwinExtended() {

    }

    public void crawlAll() {

        System.out.println("#############Starte Anwendung################");
        go("https://sports.bwin.com/de/sports/4/wetten/fußball");
    }

    public void go(String url) {
        WebDriver driver = new HtmlUnitDriver();
        driver.get(url);
        int pagenumber =1;
        Boolean nextpage = true;

        while (nextpage) {
            //Anzahl der Spieltage pro Seite
            int playDayperSiteSize = driver.findElements(By.xpath(" //*[@id='markets']/div")).size();

            for (int j = 1; j <= playDayperSiteSize; j++) {
                try {
                    String dayAndDate = driver.findElements(By.xpath("//*[@id='markets']/div[" + j + "]/div/h2")).get(0).getText();
                  //  System.out.println("Spieltag : " + dayAndDate);
                    //Anzahl der unterschiedlichen Ligen pro Spieltag pro Seite
                    int gameTypeCount = driver.findElements(By.xpath("//*[@id='markets']/div[" + j + "]/div/ul/li/ul/li")).size();
                    for (int k = 1; k <= gameTypeCount; k++) {
                        String nameOfGametype = driver
                                .findElements(By.xpath("//*[@id='markets']/div[" + j + "]/div/ul/li/ul/li[" + k + "]/h2/a")).get(0)
                                .getText();
                 //       System.out.println("Spieltyp : " + nameOfGametype);
                        crawlDay("//*[@id='markets']/div[" + j + "]/div/ul/li/ul/li[" + k + "]/ul/li", driver, dayAndDate, nameOfGametype);

                    }

                } catch (Exception e) {
                    logger.error("Exception gefangen erster For Schleife");
                    e.printStackTrace();
                }
            }
            try {
                int size = driver.findElements(By.xpath("//*[@id='markets-pager-bottom']/ul/li")).size();
                driver.findElement(By.xpath("//*[@id='markets-pager-bottom']/ul/li[" + size + "]/a")).click();
                logger.info("Open Next Page ->"+(pagenumber+1));
            } catch (NoSuchElementException e) {
                logger.error("No Such Element Expection geflogen. Beende nextpage");
                nextpage = false;
            } catch (Exception e) {
                logger.error("Exception gefangen in Whileschleife");
                e.printStackTrace();
            }
            pagenumber++;
        }
        logger.info("Complete Crawl Finished");
        driver.close();
    }

    public void crawlDay(String xPath, WebDriver driver, String dayAndDate, String spieltyp) {
        //Anzhal der Spiele der Liga pro Spieltag pro Seite
        int gamePerGametype = driver.findElements(By.xpath(xPath)).size();
        for (int i = 1; i <= gamePerGametype; i++) {
            CrawlInfos b = new CrawlInfos();
            try {
                String uhrzeit = driver.findElements(By.xpath(xPath + "[" + i + "]/div/div/ul/li/div/h6")).get(0).getText();
                String mannschaft_1 = driver
                        .findElements(By.xpath(xPath + "[" + i + "]/div/div/ul/li/div/table/tbody/tr/td[1]/form/button/span[2]")).get(0)
                        .getText();
                String quoteM1 = driver
                        .findElements(By.xpath(xPath + "[" + i + "]/div/div/ul/li/div/table/tbody/tr/td[1]/form/button/span[1]")).get(0)
                        .getText();
                String quoteX = driver
                        .findElements(By.xpath(xPath + "[" + i + "]/div/div/ul/li/div/table/tbody/tr/td[2]/form/button/span[1]")).get(0)
                        .getText();
                String mannschaft_2 = driver
                        .findElements(By.xpath(xPath + "[" + i + "]/div/div/ul/li/div/table/tbody/tr/td[3]/form/button/span[2]")).get(0)
                        .getText();
                String quoteM2 = driver
                        .findElements(By.xpath(xPath + "[" + i + "]/div/div/ul/li/div/table/tbody/tr/td[3]/form/button/span[1]")).get(0)
                        .getText();
           //     System.out.println("Uhrzeit : " + uhrzeit + " Uhr  " + mannschaft_1 + " " + quoteM1 + " | " + quoteX + " | " + quoteM2
          //              + "  " + mannschaft_2);
                b.setErsteMannschaft(mannschaft_1);
                b.setHeimMannschaftQuote(quoteM1);
                b.setUnentschiedenQuote(quoteX);
                b.setZweiteMannschaft(mannschaft_2);
                b.setZweiteMannschaftQuote(quoteM2);
                b.setDate(getDateFromCrawlInfosString(dayAndDate, uhrzeit));
                b.setSpieltyp(spieltyp);
                b.setWettanbieter(this.WETTANBIETER);
                WebCrawler.dbmanage.saveCrawledInfo(b);
            } catch (Exception e) {
                // TODO: handle exception
            }

        }

    }

    private Date getDateFromCrawlInfosString(String date, String urhzeit) {
        Date d;
        SimpleDateFormat formatter = new SimpleDateFormat("dd.MM.yyyy HH:mm");
        try {
            d = formatter.parse(splitDateFromCrawlInfos(date) + " " + urhzeit);
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

    //_-------------------------------------------_ERGEBNIS-----------------------------------------

    public void crawlAllResults() {
        //?period=OneMonth
        goR("https://sports.bwin.com/de/sports/results");
    }

    public void goR(String url) {
        WebDriver driver = new HtmlUnitDriver();
        driver.get(url);
        Boolean nextpage = true;
        int pageNumber = 1;
        while (nextpage) {
            int playDayPerSiteSize = driver.findElements(By.xpath("//*[@id='result-items']/div")).size();
            for (int i = 1; i < playDayPerSiteSize; i++) {
                int gameTypeCount = -1;
                String dayAndDate = "empty";
                try {
                    dayAndDate = driver.findElements(By.xpath("//*[@id='result-items']/div[" + i + "]/h3")).get(0).getText();
                    gameTypeCount = driver.findElements(By.xpath("//*[@id='result-items']/div[" + i + "]/table")).size();
                    for (int j = 1; j <= gameTypeCount; j++) {
                        String nameOfGametype = driver
                                .findElements(By.xpath("//*[@id='result-items']/div[" + i + "]/table[" + j + "]/thead/tr/th[1]")).get(0)
                                .getText();
                        crawlGameTypResult(" //*[@id='result-items']/div[" + i + "]/table[" + j + "]/tbody/tr", driver, dayAndDate,
                                nameOfGametype);
                    }
                } catch (Exception e) {
                    logger.error("Crawl Ergebnis Exception geflogen");
                    System.out.println("GAmeTypeCount: " + gameTypeCount + " dayAndDate = " + dayAndDate);
                    e.printStackTrace();
                }
            }
            try {
                int size = driver.findElements(By.xpath("//*[@id='result-items']/div[" + playDayPerSiteSize + "]/ul/li")).size();
                driver.findElement(By.xpath("//*[@id='result-items']/div[" + playDayPerSiteSize + "]/ul/li[" + size + "]/a")).click();
                logger.info("Next Page -> "+ (pageNumber+1));

            } catch (NoSuchElementException e) {
                logger.error("No Such Element Expection geflogen. Beende nextpage");
                nextpage = false;
            } catch (Exception e) {
                logger.error("Exception gefangen in Whileschleife");
                e.printStackTrace();
            }
            pageNumber ++;
        }
        driver.close();
    }

    public void crawlGameTypResult(String xPath, WebDriver driver, String dayAndDate, String spieltyp) {
        int gamePerGametype = driver.findElements(By.xpath(xPath)).size();
        for (int i = 1; i <= gamePerGametype; i++) {
            String uhrzeit = driver.findElements(By.xpath(xPath + "[" + i + "]/td[1]")).get(0).getText();
            String mannschaften = driver.findElements(By.xpath(xPath + "[" + i + "]/td[2]")).get(0).getText();
            String tore = driver.findElements(By.xpath(xPath + "[" + i + "]/td[3]")).get(0).getText();      
            makeCrawlErgebnis(mannschaften, tore, dayAndDate, uhrzeit);
        }
    }

    private void makeCrawlErgebnis(String mannschaften, String tore, String date, String uhrzeit) {
        CrawlErgebnis ce = new CrawlErgebnis();
        ce.setMannschaft_1(splitErgebnisMannschaf_1(mannschaften));
        ce.setMannschaft_2(splitErgebnisMannschaf_2(mannschaften));
        String halbzeitErg = "0:0";
        String gesamtErg = "0:0";

        if (tore.contains("Verschoben") || tore.contains("Falsche Spielansetzung") || tore.contains("Suspended")) {
            logger.info("match:" + tore + " try to delete match");
            if(ce.getNullValue()){
                logger.info("Can not Delete Match, Because ResultString has null values");
            }else
            {
            WebCrawler.dbmanage.deleteBegegnung(splitErgebnisMannschaf_1(mannschaften), splitErgebnisMannschaf_2(mannschaften),
                    getDateFromCrawlErgebnisString(date, uhrzeit));
            }
        } else {
            if (tore.contains("(")) {
                halbzeitErg = splitHalbzeitErgebnis(tore);
                gesamtErg = splitGesamtErgebnis(tore);

            } else if (tore.length() < 6) {
                halbzeitErg = tore;
                gesamtErg = tore;
            }
            ce.setH_tore_1(getToreM1(halbzeitErg));
            ce.setH_tore_2(getToreM2(halbzeitErg));
            ce.setTore_1(getToreM1(gesamtErg));
            ce.setTore_2(getToreM2(gesamtErg));
            ce.setDate(getDateFromCrawlErgebnisString(date, uhrzeit));
            if (ce.getTore_1() > ce.getTore_2()) {
                ce.setSieger("1");
            } else if (ce.getTore_1() == ce.getTore_2()) {
                ce.setSieger("x");
            } else {
                ce.setSieger("2");
            }
          
            if(ce.getNullValue()){
                logger.error("Ergebnis has some null values: "+ce.print());
            }else
            {
                logger.info("found result:  " + ce.print());
                WebCrawler.dbmanage.saveCrawlErgebnis(ce);
            }
        }
        
        
    }

    /**
     * Split date from ergebnis string.
     *
     * @param date the date
     * @return the string
     */
    private String splitDateFromErgebnisString(String date) {
        try {
            int index = date.indexOf(",");
            return date.substring(index + 1);
        } catch (Exception e) {
            logger.error("Fail to Split Date From Ergebnis String: Missing Symbol , ? :" + date);
        }
        return null;
    }

    /**
     * Gets the date from crawl ergebnis string.
     *
     * @param date the date
     * @param uhrzeit the uhrzeit
     * @return the date from crawl ergebnis string
     */
    private Date getDateFromCrawlErgebnisString(String date, String uhrzeit) {
        Date d;
        SimpleDateFormat formatter = new SimpleDateFormat("dd. MMMM yyyy HH:mm");
        try {
            d = formatter.parse(splitDateFromErgebnisString(date) + " " + uhrzeit);
        } catch (ParseException e) {
            logger.error("CONVERT ERROR can not convert " + date + " to Date");
            Calendar c1 = GregorianCalendar.getInstance();
            c1.set(1753, Calendar.JANUARY, 01);
            d = new Date(c1.getTimeInMillis());
        }
        return d;
    }

    /**
     * Split halbzeit ergebnis.
     *
     * @param erg the erg
     * @return the string
     */
    private String splitHalbzeitErgebnis(String erg) {
        try {
            int index = erg.indexOf("(");
            return erg.substring(index + 1).replace(")", "");
        } catch (Exception e) {
            logger.error("Fail to split HalbzeitErgebnis String: " + erg);
        }
        return null;
    }

    /**
     * Split gesamt ergebnis.
     *
     * @param erg the erg
     * @return the string
     */
    private String splitGesamtErgebnis(String erg) {
        try {
            int index = erg.indexOf("(");
            return erg.substring(0, index - 1);
        } catch (Exception e) {
            logger.error("Fail to split GesamtErgebnis String: " + erg);
        }
        return null;
    }

    /**
     * Split ergebnis mannschaf_1.
     *
     * @param erg the erg
     * @return the string
     */
    private String splitErgebnisMannschaf_1(String erg) {
        int count = countSubstringInString(erg, " -");
        if (count == 1) {
            int index = erg.indexOf(" -");
            return erg.substring(0, index - 0);
        } else {
            logger.error("Fail to Split Result Team String because finding Symbole ' -' found " + count + " times   String -> " + erg);
            return null;
        }
    }

    /**
     * Split ergebnis mannschaf_2.
     *
     * @param erg the erg
     * @return the string
     */
    private String splitErgebnisMannschaf_2(String erg) {
        int count = countSubstringInString(erg, " -");
        if (count == 1) {
            int index = erg.indexOf(" -");
            return erg.substring(index + 3);
        } else {
            logger.error("Fail to Split Result Team String because finding Symbole ' -' found " + count + " times   String -> " + erg);
            return null;
        }
    }

    /**
     * Gets the tore m1.
     *
     * @param s the s
     * @return the tore m1
     */
    private int getToreM1(String s) {
        int index = s.indexOf(":");
        try {
            Integer tore = new Integer(s.substring(0, index));
            return tore;
        } catch (Exception e) {
            logger.error("Fail to parse Tore to String: Try to parse: " + s);
            return -1;
        }

    }

    /**
     * Gets the tore m2.
     *
     * @param s the s
     * @return the tore m2
     */
    private int getToreM2(String s) {
        int index = s.indexOf(":");
        try {
            Integer tore = new Integer(s.substring(index + 1));
            return tore;
        } catch (Exception e) {
            logger.error("Fail to parse Tore to String: Try to parse: " + s);
            return -1;
        }

    }

    private int countSubstringInString(String str, String substr) {
        int lastIndex = 0;
        int count = 0;
        while (lastIndex != -1) {
            lastIndex = str.indexOf(substr, lastIndex);
            if (lastIndex != -1) {
                count++;
                lastIndex += substr.length();
            }
        }
        return count;
    }
}
