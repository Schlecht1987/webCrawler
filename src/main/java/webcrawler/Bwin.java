package webcrawler;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import main.Main;
import mapping.Begegnung;
import mapping.Mannschaft;
import mapping.Quote;
import mapping.Spieltyp;
import mapping.Wettanbieter;

import org.hibernate.Session;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Bwin {
    private Wettanbieter wettanbieter ;
    private  final Logger logger = LoggerFactory.getLogger(Bwin.class);
    
    public Bwin(){
        wettanbieter = new Wettanbieter("Bwin");
    }
    
    public void crawl(String url,String land, Spieltyp spieltyp){
        Session session = WebCrawler.sessionFactory.openSession();
        session.beginTransaction();
        
        List<CrawlInfos> crawlInfos;
        crawlInfos= getInfos(url);
        for (CrawlInfos cf : crawlInfos) {
            
        }
    }



    public List<CrawlInfos> getInfos(String url) {
        WebDriver driver = new HtmlUnitDriver();
        List<CrawlInfos> crawlInfos = new ArrayList<CrawlInfos>();
        driver.get(url);
        for (int i = 1; i <= driver.findElements(By.xpath(XPath.getAnzahlSpieltage())).size(); i++) {
            Date date =  getDateFromString(driver.findElements(By.xpath(XPath.getSpieltag(i))).get(0).getText());          
            for (int j = 1; j <= driver.findElements(By.xpath(XPath.getAnzahlSpiele(i))).size(); j++) {
                crawlInfos.add(getInfos(XPath.getBegegnung(i, j), driver)) ;
            }
        }
        driver.quit();
        return crawlInfos;
    }

    private CrawlInfos getInfos(String xpath, WebDriver d) {
        CrawlInfos b = new CrawlInfos();
        b.setErsteMannschaft(d.findElements(By.xpath(xpath + XPath.getErsteMannschaft())).get(0).getText());
        b.setHeimMannschaftQuote(d.findElements(By.xpath(xpath + XPath.getErsteMannschaftQuote())).get(0).getText());
        b.setUnentschiedenQuote(d.findElements(By.xpath(xpath + XPath.getUnentschiedenQuote())).get(0).getText());
        b.setZweiteMannschaft(d.findElements(By.xpath(xpath + XPath.getZweiteMannschaft())).get(0).getText());
        b.setZweiteMannschaftQuote(d.findElements(By.xpath(xpath + XPath.getZweiteMannschaftQuote())).get(0).getText());
        b.print();
        return b;
    }

    private float getFloatFromString(String quote) {
        Float q = 0f;
        try {
            q = new Float(quote);
        } catch (Exception e) {
            logger.debug("CONVERT ERROR can not convert " + quote + " to float");

        }
        return q;
    }

    private Date getDateFromString(String date) {
        Date d;
        SimpleDateFormat formatter = new SimpleDateFormat("dd.MM.yyyy");
        int index = date.indexOf("-");

        System.out.println(date.substring(index + 2));
        try {
            d = formatter.parse(date.substring(index + 2));
        } catch (ParseException e) {
            logger.debug("CONVERT ERROR can not convert " + date + " to Date");
            Calendar c1 = GregorianCalendar.getInstance();
            c1.set(1753, Calendar.JANUARY, 01); 
            d = new Date(c1.getTimeInMillis());
        }
        return d;
    }
    
    private Begegnung convertCrawlInfos(CrawlInfos cf, Date date, Spieltyp spieltyp, String land){
      
        Begegnung b = new Begegnung();
        b.setMannschaft_1(Main.dbmanage.checkMannschaft(cf.getErsteMannschaft(),land));
        b.setMannschaft_2(Main.dbmanage.checkMannschaft(cf.getZweiteMannschaft(),land));
        b.setDatum(date);           
        b.setSpieltyp(spieltyp);
        return b;
    }
    private Quote convertCrawlInfos(CrawlInfos crawlInfos, Begegnung begegnung){
        Quote quote = new Quote();
        quote.setQuoteM1(getFloatFromString(crawlInfos.getHeimMannschaftQuote()));
        quote.setQuoteX(getFloatFromString(crawlInfos.getUnentschiedenQuote()));
        quote.setQuoteM2(getFloatFromString(crawlInfos.getZweiteMannschaftQuote()));
        quote.setBegegnung(begegnung);
        quote.setWettanbieter(wettanbieter);
        return quote;
    }
}
