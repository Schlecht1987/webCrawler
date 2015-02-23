package webcrawler;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import lib.NMAClientLib;
import main.ReadCSV;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;




// TODO: Auto-generated Javadoc
/**
 * The Class WebCrawler.
 */
public class WebCrawler {
    
    /** The Constant BUNDESLIGA. */
    public static  final String BUNDESLIGA = "Bundesliga";
    
    public static  final String BUNDESLIGA_BEG_URL = "http://sports.bwin.com/de/sports/4/43/wetten/bundesliga";
    
    public static  final String BUNDESLIGA_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=17&league=43&period=OneMonth&sort=Date";
    
    /** The Constant PRIMERA_DIVIVION. */
    public static  final String PRIMERA_DIVISION = "Primera Division";
    
    public static final String PRIMERA_DIVISION_BEG_URL = "http://sports.bwin.com/de/sports/4/16108/wetten/primera-division-(liga-bbva)";
    
    public static final String PRIMERA_DIVISION_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=28&league=16108&period=OneMonth&sort=Date";
    
    /** The Constant PREMIER_LEAGUE. */
    public static  final String PREMIER_LEAGUE = "Premier League";
    
    public static  final String PREMIER_LEAGUE_BEG_URL = "http://sports.bwin.com/de/sports/4/46/wetten/premier-league";
    
    public static  final String PREMIER_LEAGUE_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=14&league=46&period=OneMonth&sort=Date";
    

    
    public static  final String SERIE_A = "Serie A";
    
    public static  final String SERIE_A_BEG_URL = "https://sports.bwin.com/de/sports/4/42/wetten/serie-a";
    
    public static  final String SERIE_A_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=20&league=42&period=OneMonth&sort=Date";
    
    

    
    /** The Constant LIGUE_1. */
    public static  final String LIGUE_1 = "Ligue 1";
    
    public static  final String LIGUE_1_BEG_URL = "http://sports.bwin.com/de/sports/4/4131/wetten/ligue-1";
    
    public static  final String LIGUE_1_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=16&league=4131&period=OneMonth&sort=Date";
    
    
    public static final String CHAMPIONS_LEAGUE = "Champions League";
    
    public static final String CHAMPIONS_LEAGUE_BEG_URL = "http://sports.bwin.com/de/sports/4/1606/wetten/champions-league";
    
    public static final String CHAMPIONS_LEAGUE_ERG_URL = "";
    
    
    public static final String WORLD_FRIENDSHIP = "Welt Freundschaftsspiele";
    
    public static final String WORLD_FRIENDSHIP_BEG_URL = "http://sports.bwin.com/de/sports/4/433/wette/freundschaftsspiele";
    
    public static final String WORLD_FRIENDSHIP_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=6&league=433&period=OneMonth&sort=Date";
    /** The dbmanage. */
    public static DbManage dbmanage;
    
    private static final Logger logger       = LoggerFactory.getLogger(WebCrawler.class);

    /**
     * Crawl.
     */
    public static void crawl(int count) {
        if (dbmanage == null) {
            dbmanage = new DbManage();
         //   ReadCSV obj = new ReadCSV();
       //     obj.run();
        }
        crawlBwin(count);
        crawlErgebnisseBewin(count);
        dbmanage.sessionFactory.close();
        dbmanage= null;
    }


    /**
     * Crawl bwin.
     */
    public static void crawlBwin(int count) {
        logger.info("start crawling matches....");
        long zstVorher;
        long zstNachher;
        zstVorher = System.currentTimeMillis();       
        Bwin bwin = new Bwin();
        bwin.crawl(BUNDESLIGA_BEG_URL, BUNDESLIGA);
        bwin.crawl(PRIMERA_DIVISION_BEG_URL, PRIMERA_DIVISION);       
        bwin.crawl(PREMIER_LEAGUE_BEG_URL, PREMIER_LEAGUE);      
        bwin.crawl(SERIE_A_BEG_URL, SERIE_A);
        bwin.crawl(LIGUE_1_BEG_URL, LIGUE_1);    
     
        zstNachher = System.currentTimeMillis();
        logger.info("##############finish crawling matches: Time: "+ ((zstNachher - zstVorher)/1000) + " sec ################");
        if(((zstNachher - zstVorher)/1000)< 10){
            notifiy("ToFastCrawl","Something wrong. To fast crawl: Time :"+((zstNachher - zstVorher)/1000)+ "At Crawl number: "+count);
        }
        
    }
    
    public static void crawlErgebnisseBewin(int count){
        logger.info("start crawling results....");
        long zstVorher;
        long zstNachher;
        zstVorher = System.currentTimeMillis();     
        Bwin bwin = new Bwin();
        bwin.crawlErgebnisse(BUNDESLIGA_ERG_URL,BUNDESLIGA);
        bwin.crawlErgebnisse(PRIMERA_DIVISION_ERG_URL,PRIMERA_DIVISION);
        bwin.crawlErgebnisse(PREMIER_LEAGUE_ERG_URL,PREMIER_LEAGUE);
        bwin.crawlErgebnisse(SERIE_A_ERG_URL,SERIE_A);
        bwin.crawlErgebnisse(LIGUE_1_ERG_URL,LIGUE_1);
       // bwin.crawlErgebnisse(WORLD_FRIENDSHIP_ERG_URL,WORLD_FRIENDSHIP);
        zstNachher = System.currentTimeMillis();
        logger.info("############finish crawling results: Time: "+ ((zstNachher - zstVorher)/1000) + " sec ################");
        if(((zstNachher - zstVorher)/1000)< 10){
            notifiy("ToFastCrawl","Something wrong. To fast crawl: Time :"+((zstNachher - zstVorher)/1000)+ "At Crawl number: "+count);
        }
    }
    
    public static void notifiy(String event, String desc){
        if (NMAClientLib.notify("Webcrawler", event, desc, 1, "99444000825303dc5fd00f3f412126a0d4577116b11908d6") == 1) {
            logger.info("notification sent to mobile device: "+event+" , "+desc);
           
        } else {
            logger.info(NMAClientLib.getLastError());
        }
    }

}
