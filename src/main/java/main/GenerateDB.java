package main;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import mapping.Begegnung;
import mapping.Mannschaft;
import mapping.Quote;
import mapping.Spieltyp;
import mapping.Wettanbieter;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

public class GenerateDB {

    private SessionFactory sessionFactory ;
    private Session session;
    private List<Mannschaft> mList = new ArrayList<Mannschaft>();
    private List<Spieltyp> sList = new ArrayList<Spieltyp>(); 
    private List<Wettanbieter> wList = new ArrayList<Wettanbieter>(); 
    private List<Begegnung> bList = new ArrayList<Begegnung>(); 
    private List<Quote> qList = new ArrayList<Quote>();

    public GenerateDB(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;


    }
    
    public void generate(int anzahl){
        session = sessionFactory.openSession();
        session.beginTransaction();
        
        genMannschaften();
        genWettanbieter();
        genSpieltyp();
        genBegegnungen(anzahl);
        genQuote();
        
        session.getTransaction().commit();
        session.close();
        
    }
    public void genWettanbieter(){
        wList.add(new Wettanbieter("Bwin"));
        for (Wettanbieter wettanbieter : wList) {
            session.save(wettanbieter);
        }
    }
    
    public void genSpieltyp(){
        sList.add(new Spieltyp("Bundesliga"));
        
        for (Spieltyp spieltyp : sList) {
            session.save(spieltyp);
        }
    }
    
    public void genMannschaften(){
        mList.add(new Mannschaft("FC Bayern München","Deutschland"));
        mList.add(new Mannschaft("VfL Wolfsburg","Deutschland"));
        mList.add(new Mannschaft("Borussia Mönchengladbach","Deutschland"));
        mList.add(new Mannschaft("Hannover 96","Deutschland"));
        mList.add(new Mannschaft("TSG 1899 Hoffenheim","Deutschland"));
        mList.add(new Mannschaft("Bayer 04 Leverkusen","Deutschland"));
        mList.add(new Mannschaft("FC Augsburg","Deutschland"));
        mList.add(new Mannschaft("1. FSV Mainz 05","Deutschland"));     
        mList.add(new Mannschaft("SC Paderborn 07","Deutschland"));    
        mList.add(new Mannschaft("1. FC Köln","Deutschland")); 
        mList.add(new Mannschaft("FC Schalke 04","Deutschland")); 
        mList.add(new Mannschaft("Eintracht Frankfurt","Deutschland")); 
        mList.add(new Mannschaft("Sport-Club Freiburg","Deutschland")); 
        mList.add(new Mannschaft("Hertha BSC","Deutschland")); 
        mList.add(new Mannschaft("Borussia Dortmund","Deutschland")); 
        mList.add(new Mannschaft("SV Werder Bremen","Deutschland")); 
        mList.add(new Mannschaft("Hamburger SV","Deutschland")); 
        mList.add(new Mannschaft("VfB Stuttgart","Deutschland")); 
        for (Mannschaft mannschaft : mList) {
            session.save(mannschaft);
        }
    }
    
    public void genBegegnungen(int anzahl){
        int random = mList.size();
        for (int i = 0; i < anzahl; i++) {
            Begegnung temp = new Begegnung();
            temp.setDatum(new Date());
            temp.setMannschaft_1(mList.get(myRandom(0, random)));
            temp.setMannschaft_2(mList.get(myRandom(0, random)));
            temp.setSpieltyp(sList.get(0));
            bList.add(temp);
            session.save(temp);
        }        
    }
    
    public void genQuote(){
        for (int i = 0; i < bList.size(); i++) {
            Quote temp = new Quote();
            temp.setQuoteM1((float)myRandom(1.0,10.0));
            temp.setQuoteM2((float)myRandom(1.0,10.0));
            temp.setQuoteX((float)myRandom(1.0,10.0));
            temp.setBegegnung(bList.get(i));
            temp.setWettanbieter(wList.get(0));
            qList.add(temp);
            session.save(temp);
        }
    }
    
    public static int myRandom(int low, int high) {
        return (int) (Math.random() * (high - low) + low);
    }
    public static double myRandom(double low, double high) {
        return Math.random() * (high - low) + low;
    }

}
