package main;

import java.util.Date;
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

        Bwin b = new Bwin();
        
        //bundesliga ergebnisse : https://sports.bwin.com/de/sports/results?sport=4&region=17&league=43&period=OneMonth&sort=Date
        b.crawlErgebnisse("https://sports.bwin.com/de/sports/results?sport=4&region=17&league=43&period=OneMonth&sort=Date");
            
       /*     Timer t = new Timer();
            
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
               }
       
            }, 0, 3600000); //alle 5 sekunden...*/
        
     

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

  

}
