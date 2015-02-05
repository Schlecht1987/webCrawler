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

// TODO: Auto-generated Javadoc
/**
 * The Class GenerateDB.
 */
public class GenerateDB {

    /** The session factory. */
    private SessionFactory sessionFactory ;
    
    /** The session. */
    private Session session;
    
    /** The m list. */
    private List<String> mList = new ArrayList<String>();
    
    /** The s list. */
    private List<Spieltyp> sList = new ArrayList<Spieltyp>(); 
    
    /** The w list. */
    private List<Wettanbieter> wList = new ArrayList<Wettanbieter>(); 
    
    /** The b list. */
    private List<Begegnung> bList = new ArrayList<Begegnung>(); 
    
    /** The q list. */
    private List<Quote> qList = new ArrayList<Quote>();

    /**
     * Instantiates a new generate db.
     *
     * @param sessionFactory the session factory
     */
    public GenerateDB(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;


    }
    
    /**
     * Generate.
     *
     * @param anzahl the anzahl
     */
    public void generate(int anzahl){
        session = sessionFactory.openSession();
        session.beginTransaction();
        
        genStringen();
        genWettanbieter();
        genSpieltyp();
        genBegegnungen(anzahl);
        genQuote();
        
        session.getTransaction().commit();
        session.close();
        
    }
    
    /**
     * Gen wettanbieter.
     */
    public void genWettanbieter(){
        wList.add(new Wettanbieter("Bwin"));
        for (Wettanbieter wettanbieter : wList) {
            session.save(wettanbieter);
        }
    }
    
    /**
     * Gen spieltyp.
     */
    public void genSpieltyp(){
        sList.add(new Spieltyp("Bundesliga"));
        
        for (Spieltyp spieltyp : sList) {
            session.save(spieltyp);
        }
    }
    
    /**
     * Gen stringen.
     */
    public void genStringen(){
        mList.add(new String("FC Bayern München"));
        mList.add(new String("VfL Wolfsburg"));
        mList.add(new String("Borussia Mönchengladbach"));
        mList.add(new String("Hannover 96"));
        mList.add(new String("TSG 1899 Hoffenheim"));
        mList.add(new String("Bayer 04 Leverkusen"));
        mList.add(new String("FC Augsburg"));
        mList.add(new String("1. FSV Mainz 05"));     
        mList.add(new String("SC Paderborn 07"));    
        mList.add(new String("1. FC Köln")); 
        mList.add(new String("FC Schalke 04")); 
        mList.add(new String("Eintracht Frankfurt")); 
        mList.add(new String("Sport-Club Freiburg")); 
        mList.add(new String("Hertha BSC")); 
        mList.add(new String("Borussia Dortmund")); 
        mList.add(new String("SV Werder Bremen")); 
        mList.add(new String("Hamburger SV")); 
        mList.add(new String("VfB Stuttgart")); 

    }
    
    /**
     * Gen begegnungen.
     *
     * @param anzahl the anzahl
     */
    public void genBegegnungen(int anzahl){
        int random = mList.size();
        for (int i = 0; i < anzahl; i++) {
            Begegnung temp = new Begegnung();
            temp.setDatum(new Date());
            Mannschaft m1 = new Mannschaft();
            Mannschaft m2 = new Mannschaft();
            m1.setName(mList.get(myRandom(0, random)));
            m2.setName(mList.get(myRandom(0, random)));
            temp.setMannschaft_1(m1);
            temp.setMannschaft_2(m2);
            temp.setSpieltyp(sList.get(0));
            bList.add(temp);
            session.save(temp);
        }        
    }
    
    /**
     * Gen quote.
     */
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
    
    /**
     * My random.
     *
     * @param low the low
     * @param high the high
     * @return the int
     */
    public static int myRandom(int low, int high) {
        return (int) (Math.random() * (high - low) + low);
    }
    
    /**
     * My random.
     *
     * @param low the low
     * @param high the high
     * @return the double
     */
    public static double myRandom(double low, double high) {
        return Math.random() * (high - low) + low;
    }

}
