package main;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;
import java.util.logging.ConsoleHandler;
import java.util.logging.Level;

import mapping.Begegnung;
import mapping.Ergebnis;
import mapping.HistoryQuote;
import mapping.Quote;
import mapping.Spieltyp;
import mapping.Wettanbieter;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import webcrawler.Bwin;
import webcrawler.CrawlErgebnis;
import webcrawler.DbManage;
import webcrawler.WebCrawler;

// TODO: Auto-generated Javadoc
/**
 * The Class Main.
 */
public class Main {

    /** The Constant logger. */
    private static final Logger logger = LoggerFactory.getLogger(Main.class);

    /**
     * The main method.
     *
     * @param args the arguments
     */
    public static void main(String[] args) {

        run();

    }

    /**
     * runs 200 crawls. Time on Raspberry pi one and a half week
     */
    public static void run() {
        int runs = 200;
        WebCrawler.crawl(200);
    }

}
