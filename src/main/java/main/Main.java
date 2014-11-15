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

import webcrawler.Bwin;
import webcrawler.CrawlErgebnis;
import webcrawler.DbManage;
import webcrawler.WebCrawler;



// TODO: Auto-generated Javadoc
/**
 * The Class Main.
 */
public class Main {




    /**
     * The main method.
     *
     * @param args the arguments
     */
    public static void main(String[] args) {

        runEndless();
    }
    
    public static void runEndless(){
        Timer t = new Timer();
        
        t.schedule(new TimerTask(){
   
           @Override
           public void run() {
               
               long zstVorher;
               long zstNachher;

               zstVorher = System.currentTimeMillis();
               System.out.println("RUNNING NEW CRAWL");   
               WebCrawler.crawl();

               zstNachher = System.currentTimeMillis();
               System.out.println("Zeit benötigt: " + ((zstNachher - zstVorher)/1000) + " sec");
               

              System.out.println("Finish Running Crawl");  
              System.out.println("Starting new run in: "+ (11100 - ((zstNachher - zstVorher)/1000)) + " sec");
           }
   
        }, 0, 11100000); 
    }
    
    public static void run(){
        long zstVorher;
        long zstNachher;

        zstVorher = System.currentTimeMillis();
        System.out.println("RUNNING NEW CRAWL");   
        WebCrawler.crawl();

        zstNachher = System.currentTimeMillis();
        System.out.println("Zeit benötigt: " + ((zstNachher - zstVorher)/1000) + " sec");
        

       System.out.println("Finish Running Crawl");
       WebCrawler.dbmanage.sessionFactory.close();
    }
    
    public static void runErgebnisTest(){
        DbManage dm = new DbManage();
        
        CrawlErgebnis ce = new CrawlErgebnis();
        ce.setDate(makeDateFromString("22.11.2014"));
        ce.setH_tore_1(1);
        ce.setH_tore_2(2);
        ce.setTore_1(3);
        ce.setTore_2(4);
        ce.setSieger("2");
        ce.setMannschaft_1("Hannover 96");
        ce.setMannschaft_2("Bayer Leverkusen");
        dm.saveCrawlErgebnis(ce);
        dm.sessionFactory.close();
    }

    private static Date makeDateFromString(String date) {
        Date d;
        SimpleDateFormat formatter = new SimpleDateFormat("dd.MM.yyyy");
        try {
            d = formatter.parse((date));
        } catch (ParseException e) {        
            Calendar c1 = GregorianCalendar.getInstance();
            c1.set(1753, Calendar.JANUARY, 01);
            d = new Date(c1.getTimeInMillis());
        }
        return d;
    }

}
