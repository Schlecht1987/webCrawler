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
    public static final String  BUNDESLIGA               = "Bundesliga";

    /** The Constant BUNDESLIGA_BEG_URL. */
    public static final String  BUNDESLIGA_BEG_URL       = "http://sports.bwin.com/de/sports/4/43/wetten/bundesliga";

    /** The Constant BUNDESLIGA_ERG_URL. */
    public static final String  BUNDESLIGA_ERG_URL       = "https://sports.bwin.com/de/sports/results?sport=4&region=17&league=43&period=OneMonth&sort=Date";

    /** The Constant PRIMERA_DIVIVION. */
    public static final String  PRIMERA_DIVISION         = "Primera Division";

    /** The Constant PRIMERA_DIVISION_BEG_URL. */
    public static final String  PRIMERA_DIVISION_BEG_URL = "http://sports.bwin.com/de/sports/4/16108/wetten/primera-division-(liga-bbva)";

    /** The Constant PRIMERA_DIVISION_ERG_URL. */
    public static final String  PRIMERA_DIVISION_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=28&league=16108&period=OneMonth&sort=Date";

    /** The Constant PREMIER_LEAGUE. */
    public static final String  PREMIER_LEAGUE           = "Premier League";

    /** The Constant PREMIER_LEAGUE_BEG_URL. */
    public static final String  PREMIER_LEAGUE_BEG_URL   = "http://sports.bwin.com/de/sports/4/46/wetten/premier-league";

    /** The Constant PREMIER_LEAGUE_ERG_URL. */
    public static final String  PREMIER_LEAGUE_ERG_URL   = "https://sports.bwin.com/de/sports/results?sport=4&region=14&league=46&period=OneMonth&sort=Date";

    /** The Constant SERIE_A. */
    public static final String  SERIE_A                  = "Serie A";

    /** The Constant SERIE_A_BEG_URL. */
    public static final String  SERIE_A_BEG_URL          = "https://sports.bwin.com/de/sports/4/42/wetten/serie-a";

    /** The Constant SERIE_A_ERG_URL. */
    public static final String  SERIE_A_ERG_URL          = "https://sports.bwin.com/de/sports/results?sport=4&region=20&league=42&period=OneMonth&sort=Date";

    /** The Constant LIGUE_1. */
    public static final String  LIGUE_1                  = "Ligue 1";

    /** The Constant LIGUE_1_BEG_URL. */
    public static final String  LIGUE_1_BEG_URL          = "http://sports.bwin.com/de/sports/4/4131/wetten/ligue-1";

    /** The Constant LIGUE_1_ERG_URL. */
    public static final String  LIGUE_1_ERG_URL          = "https://sports.bwin.com/de/sports/results?sport=4&region=16&league=4131&period=OneMonth&sort=Date";

    /** The Constant CHAMPIONS_LEAGUE. */
    public static final String  CHAMPIONS_LEAGUE         = "Champions League";

    /** The Constant CHAMPIONS_LEAGUE_BEG_URL. */
    public static final String  CHAMPIONS_LEAGUE_BEG_URL = "http://sports.bwin.com/de/sports/4/1606/wetten/champions-league";

    /** The Constant CHAMPIONS_LEAGUE_ERG_URL. */
    public static final String  CHAMPIONS_LEAGUE_ERG_URL = "";

    /** The Constant WORLD_FRIENDSHIP. */
    public static final String  WORLD_FRIENDSHIP         = "Welt Freundschaftsspiele";

    /** The Constant WORLD_FRIENDSHIP_BEG_URL. */
    public static final String  WORLD_FRIENDSHIP_BEG_URL = "http://sports.bwin.com/de/sports/4/433/wette/freundschaftsspiele";

    /** The Constant WORLD_FRIENDSHIP_ERG_URL. */
    public static final String  WORLD_FRIENDSHIP_ERG_URL = "https://sports.bwin.com/de/sports/results?sport=4&region=6&league=433&period=OneMonth&sort=Date";
    /** The dbmanage. */
    public static DbManage      dbmanage;

    /** The Constant logger. */
    private static final Logger logger                   = LoggerFactory.getLogger(WebCrawler.class);

    /**
     * Crawl.
     *
     * @param count the count
     */
    public static void crawl(int count) {
        if (dbmanage == null) {
            dbmanage = new DbManage();
        }
        int i = 1;
        Boolean go = true;
        while (go) {
            logger.info("RUNNING NEW CRAWL " + i);
           
            crawlBwin(count);
            crawlErgebnisseBwin(count);
            if(i%3 == 0){
                
            }

            i++;
            if (i == count) {
                notifiy("TO Fast Crawlings", "Run 200 finished");
                go = false;
            }
        }
        dbmanage.sessionFactory.close();
        dbmanage = null;
    }

    /**
     * Crawl bwin.
     * @param count the count
     */
    public static void crawlBwin(int count) {
        logger.info("start crawling matches....");
        long zstVorher;
        long zstNachher;
        zstVorher = System.currentTimeMillis();
        // Zeit messen falls Fehler auftreten.     
        BwinExtended bwin = new BwinExtended();
        bwin.crawlAll();
        zstNachher = System.currentTimeMillis();
        logger.info("##############finish crawling matches: Time: " + ((zstNachher - zstVorher) / 1000) + " sec ################");
        if (((zstNachher - zstVorher) / 1000) < 20) {
            notifiy("ToFastCrawl", "Something wrong. To fast crawl: Time :" + ((zstNachher - zstVorher) / 1000) + "At Crawl number: "
                    + count);
        }
    }

    /**
     * Crawl ergebnisse bwin.
     * @param count the count
     */
    public static void crawlErgebnisseBwin(int count) {
        logger.info("start crawling results....");
        long zstVorher;
        long zstNachher;
        zstVorher = System.currentTimeMillis();
        BwinExtended bwin = new BwinExtended();
        bwin.crawlAllResults();
        zstNachher = System.currentTimeMillis();
        logger.info("############finish crawling results: Time: " + ((zstNachher - zstVorher) / 1000) + " sec ################");
        if (((zstNachher - zstVorher) / 1000) < 20) {
            notifiy("ToFastCrawl", "Something wrong. To fast crawl: Time :" + ((zstNachher - zstVorher) / 1000) + "At Crawl number: "
                    + count);
        }
    }

    /**
     * Mitteilung aufs Smartphone falls crawls zu schnell durchlaufen , oder 200 crawls durchgelaufen sind
     *
     * @param event the event
     * @param desc the desc
     */
    public static void notifiy(String event, String desc) {
        if (NMAClientLib.notify("Webcrawler", event, desc, 1, "99444000825303dc5fd00f3f412126a0d4577116b11908d6") == 1) {
            logger.info("notification sent to mobile device: " + event + " , " + desc);
        } else {
            logger.info(NMAClientLib.getLastError());
        }
    }

}
