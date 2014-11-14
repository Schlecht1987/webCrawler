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
    
    /** The Constant PRIMERA_DIVIVION. */
    public static  final String PRIMERA_DIVIVION = "Primera Division";
    
    /** The Constant PREMIER_LEAGUE. */
    public static  final String PREMIER_LEAGUE = "Premier League";
    
    /** The Constant LEGA_PRO_A. */
    public static  final String LEGA_PRO_A = "Lega Pro A";
    
    /** The Constant LIGUE_1. */
    public static  final String LIGUE_1 = "Ligue 1";

    /** The dbmanage. */
    public static DbManage dbmanage;

    /**
     * Crawl.
     */
    public static void crawl() {
        if (dbmanage == null) {
            dbmanage = new DbManage();
        }
        crawlBwin();
        dbmanage.sessionFactory.close();
    }

    /**
     * Crawl bwin.
     */
    public static void crawlBwin() {
        Bwin bwin = new Bwin();
        bwin.crawl("http://sports.bwin.com/de/sports/4/43/wetten/bundesliga", BUNDESLIGA);
       bwin.crawl("http://sports.bwin.com/de/sports/4/16108/wetten/primera-division-(liga-bbva)", PRIMERA_DIVIVION);       
        bwin.crawl("http://sports.bwin.com/de/sports/4/46/wetten/premier-league", PREMIER_LEAGUE);      
        bwin.crawl("http://sports.bwin.com/de/sports/4/43296/wetten/lega-pro-a", LEGA_PRO_A);
        bwin.crawl("http://sports.bwin.com/de/sports/4/4131/wetten/ligue-1", LIGUE_1);

    }

}
