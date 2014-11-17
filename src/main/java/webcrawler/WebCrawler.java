package webcrawler;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

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
    
    public static  final String BUNDESLIGA_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=17&league=43&period=OneWeek&sort=Date";
    
    /** The Constant PRIMERA_DIVIVION. */
    public static  final String PRIMERA_DIVISION = "Primera Division";
    
    public static final String PRIMERA_DIVISION_BEG_URL = "http://sports.bwin.com/de/sports/4/16108/wetten/primera-division-(liga-bbva)";
    
    public static final String PRIMERA_DIVISION_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=28&league=16108&period=OneWeek&sort=Date";
    
    /** The Constant PREMIER_LEAGUE. */
    public static  final String PREMIER_LEAGUE = "Premier League";
    
    public static  final String PREMIER_LEAGUE_BEG_URL = "http://sports.bwin.com/de/sports/4/46/wetten/premier-league";
    
    public static  final String PREMIER_LEAGUE_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=14&league=46&period=OneWeek&sort=Date";
    

    
    public static  final String SERIE_A = "Serie A";
    
    public static  final String SERIE_A_BEG_URL = "https://sports.bwin.com/de/sports/4/42/wetten/serie-a";
    
    public static  final String SERIE_A_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=20&league=42&period=OneWeek&sort=Date";
    
    

    
    /** The Constant LIGUE_1. */
    public static  final String LIGUE_1 = "Ligue 1";
    
    public static  final String LIGUE_1_BEG_URL = "http://sports.bwin.com/de/sports/4/4131/wetten/ligue-1";
    
    public static  final String LIGUE_1_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=16&league=4131&period=OneWeek&sort=Date";
    
    
    public static final String CHAMPIONS_LEAGUE = "Champions League";
    
    public static final String CHAMPIONS_LEAGUE_BEG_URL = "http://sports.bwin.com/de/sports/4/1606/wetten/champions-league";
    
    public static final String CHAMPIONS_LEAGUE_ERG_URL = "";
    /** The dbmanage. */
    public static DbManage dbmanage;
    
    private static final Logger logger       = LoggerFactory.getLogger(WebCrawler.class);

    /**
     * Crawl.
     */
    public static void crawl() {
        if (dbmanage == null) {
            dbmanage = new DbManage();
        }
        
         crawlBwin();
          crawlErgebnisseBewin();
        dbmanage.sessionFactory.close();
        dbmanage= null;
    }


    /**
     * Crawl bwin.
     */
    public static void crawlBwin() {
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
        
    }
    
    public static void crawlErgebnisseBewin(){
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
        zstNachher = System.currentTimeMillis();
        logger.info("############finish crawling results: Time: "+ ((zstNachher - zstVorher)/1000) + " sec ################");
    }

}
