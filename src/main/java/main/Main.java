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
import mapping.Mannschaft;
import mapping.Quote;
import mapping.Spieltyp;
import mapping.Wettanbieter;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import webcrawler.DbManage;
import webcrawler.WebCrawler;



public class Main {

    public static DbManage dbmanage;


    public static void main(String[] args) {

       // WebCrawler.bwin("http://sports.bwin.com/de/sports/4/43/wetten/bundesliga");
        //bwin("http://sports.bwin.com/de/sports/4/79/wetten/2-bundesliga");
       // Mannschaft m = new Mannschaft("FC Bayern", "Deutschland");
        
       // sessionFactory = getSessionFactory();  
      //  GenerateDB gen = new GenerateDB(sessionFactory);
     //   gen.generate(250);

            dbmanage = new DbManage();
            dbmanage.checkMannschaft("BVB", "Deutschland");
            
            Timer t = new Timer();
            
            t.schedule(new TimerTask(){
       
               @Override
               public void run() {
                  System.out.println(System.currentTimeMillis());            
               }
       
            }, 0, 5000); //alle 5 sekunden...
        
        /*Session session = sessionFactory.openSession();
 
       
        
        session.beginTransaction();
       
        Mannschaft m = new Mannschaft("BVB","Deutschland");  
        session.save(m);
        session.getTransaction().commit();
        
        session.beginTransaction();
;
        System.out.println(m.getId()+" "+m.getName());
        Spieltyp s = new Spieltyp("Bwin");
        session.save(s);
        Begegnung b = new Begegnung();
        b.setMannschaft_1(m);
        b.setMannschaft_2(m);
        b.setDatum(new Date());
        b.setSpieltyp(s);
        session.save(b);
        session.getTransaction().commit();
        
        session.close();
        sessionFactory.close();*/

    }

  

}
