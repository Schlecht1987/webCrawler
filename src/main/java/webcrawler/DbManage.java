package webcrawler;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import mapping.Begegnung;
import mapping.HistoryQuote;
import mapping.Quote;
import mapping.Spieltyp;
import mapping.Wettanbieter;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

// TODO: Auto-generated Javadoc
/**
 * The Class DbManage.
 */
public class DbManage {

    /** The session factory. */
    public SessionFactory sessionFactory;

    /** The logger. */
    private final Logger  logger = LoggerFactory.getLogger(DbManage.class);

    /**
     * Instantiates a new db manage.
     */
    public DbManage() {
        sessionFactory = getSessionFactory();
        
    }

    /**
     * Save object.
     *
     * @param o the o
     * @param info the info
     * @return the boolean
     */
    private Boolean saveObject(Object o, String info) {
        Session session = sessionFactory.openSession();
        try {
            session.beginTransaction();
            session.save(o);
            session.getTransaction().commit();
            logger.info("Sucessfully saved 'Object': " + info);
            return true;
        } catch (Exception e) {
            if (session.getTransaction() != null)
                session.getTransaction().rollback();
            logger.info("Error in saveOject:  fail to save: " + info);
            e.printStackTrace();
        } finally {
            session.close();
        }
        return false;
    }
    
    private Boolean updateObject(Object o, String info){
        Session session = sessionFactory.openSession();
        try {
            session.beginTransaction();
            session.update(o);
            session.getTransaction().commit();
            logger.info("Sucessfully updated 'Object': " + info);
            return true;
        } catch (Exception e) {
            if (session.getTransaction() != null)
                session.getTransaction().rollback();
            logger.info("Error in updateOject:  fail to save: " + info);
            e.printStackTrace();
        } finally {
            session.close();
        }
        return false;
    }

    /**
     * Save crawled info.
     *
     * @param cf the cf
     */
    public void saveCrawledInfo(CrawlInfos cf) {

        if (checkIfBegegnungAlreadyExist(cf)) {
            logger.info("Found Same Begegnung. Not saving them");
            Begegnung b = getBegegnunFromCrawlInfo(cf);
            List<Quote> list = (List<Quote>) getQuery(MakeQuery.getQuoteFromBegegnungsId(b.getId()));
            if (list.size() == 1) {
                Quote latest = convertCrawlInfos(cf, b);
                Quote old = list.get(0);
                //Wenn die Quote nicht gleich ist
                if(! compareQuoteWithCrawlInfos(old,  latest))
                {
                    updateQuoteAndSaveToHistory(old,latest);  
                }
            }

        } else {
            Spieltyp s = getSpieltypByName(cf.getSpieltyp());
            Wettanbieter w = getWettanbieterByName(cf.getWettanbieter());
            Begegnung b = convertCrawlInfos(cf, s);
            saveObject(b, printBegegnung(b));
            Quote q = convertCrawlInfos(cf, b);
            saveObject(q, printQuote(q));
        }

    }
    
    private void updateQuoteAndSaveToHistory(Quote old, Quote latest){
       logger.info("FOUND CHNAGED QUOTE");
        HistoryQuote hq = new HistoryQuote();
        hq.setDatum(new Date());
        hq.setQuote(old);
        hq.setQuote1(old.getQuoteM1());
        hq.setQuote2(old.getQuoteM2());
        hq.setQuoteX(old.getQuoteX());
        saveObject(hq, printHistoryQuote(hq));
        old.setQuoteM1(latest.getQuoteM1());
        old.setQuoteM2(latest.getQuoteM2());
        old.setQuoteX(latest.getQuoteX());
        updateObject(old, printQuote(old));           
    }

    private Boolean compareQuoteWithCrawlInfos(Quote old, Quote latest) {
        if (old.getQuoteM1() == latest.getQuoteM1() && old.getQuoteM2() == latest.getQuoteM2() && old.getQuoteX() == latest.getQuoteX()) {
            return true;
        }
        return false;
    }

    /**
     * Check if begegnung already exist.
     *
     * @param cf the cf
     * @return the boolean
     */
    private Boolean checkIfBegegnungAlreadyExist(CrawlInfos cf) {
        List<Begegnung> begegnungen = null;
        begegnungen = (List<Begegnung>) getQuery(MakeQuery.getSpecificBegegnungsQuery(cf));
        if (begegnungen.size() == 1) {
            return true;
        } else if (begegnungen.size() == 0) {
            return false;
        } else {
            logger.error("Error in CheckIfBegegnugenALreadyExits: Found same Begegnung more then once");
            for (Begegnung begegnung : begegnungen) {
                logger.info(begegnung.getMannschaft_1() + " vs " + begegnung.getMannschaft_2() + " at: " + begegnung.getDatum());
            }
            return true;
        }

    }

    private Begegnung getBegegnunFromCrawlInfo(CrawlInfos cf) {
        List<Begegnung> begegnungen = null;
        begegnungen = (List<Begegnung>) getQuery(MakeQuery.getSpecificBegegnungsQuery(cf));
        if (begegnungen.size() == 1) {
            return begegnungen.get(0);
        } else if (begegnungen.size() == 0) {
            return null;
        } else {
            logger.error("Error in getBegegnunFromCrawlInfo: Found same Begegnung more then once");
            for (Begegnung begegnung : begegnungen) {
                logger.info(begegnung.getMannschaft_1() + " vs " + begegnung.getMannschaft_2() + " at: " + begegnung.getDatum());
            }
            return begegnungen.get(0);
        }
    }

    /**
     * Gets the query.
     *
     * @param query the query
     * @return the query
     */
    private List<?> getQuery(String query) {
        Session session = sessionFactory.openSession();
        try {
            session.beginTransaction();
            Query q = session.createQuery(query);
            List<?> l = q.list();
            session.getTransaction().commit();
            return l;
        } catch (Exception e) {
            if (session.getTransaction() != null)
                session.getTransaction().rollback();
            logger.info("Error in getQuery: query fail: " + query);
            e.printStackTrace();
        } finally {
            session.close();
        }
        return null;
    }

    /**
     * Test query.
     */
    public void testQuery() {
        List<Begegnung> begegnungen;
        Session session = sessionFactory.openSession();
        session.beginTransaction();
        Query query = session.createQuery("from Begegnung where datum = '2014-11-12' AND mannschaft_1 = 'Hannover 96'");
        begegnungen = (List<Begegnung>) query.list();
        for (Begegnung begegnung : begegnungen) {
            System.out.println(begegnung.getMannschaft_1() + " vs " + begegnung.getMannschaft_2());
        }

    }

    /**
     * search for the spieltyp an when it not exist it will be created and returned.
     *
     * @param name the name
     * @return the spieltyp by name
     */
    public Spieltyp getSpieltypByName(String name) {
        List<Spieltyp> spieltyp = null;
        spieltyp = (List<Spieltyp>) getQuery(MakeQuery.getSpieltypByNameQuery(name));
        if (spieltyp.size() < 1) {
            Spieltyp s = new Spieltyp(name);
            saveObject(s, printSpieltyp(s));
            return s;
        } else if (spieltyp.size() == 1) {
            return spieltyp.get(0);
        } else {
            logger.info("Error in getSpieltypByName: more then one spieltyp found by name");
            for (Spieltyp st : spieltyp) {
                logger.info("Found : " + st.getName());
            }
            logger.info("used first element");
            return spieltyp.get(0);
        }
    }

    /**
     * Gets the wettanbieter by name.
     *
     * @param name the name
     * @return the wettanbieter by name
     */
    public Wettanbieter getWettanbieterByName(String name) {
        List<Wettanbieter> wettanbieter = null;
        wettanbieter = (List<Wettanbieter>) getQuery(MakeQuery.getWettanbieterByNameQuery(name));
        if (wettanbieter.size() < 1) {
            Wettanbieter w = new Wettanbieter(name);
            saveObject(w, printWettanbieter(w));
            return w;
        } else if (wettanbieter.size() == 1) {
            return wettanbieter.get(0);
        } else {
            logger.info("Error in getWettanbieterByName: more then one wettanbieter found by name");
            for (Wettanbieter st : wettanbieter) {
                logger.info("Found : " + st.getName());
            }
            logger.info("used first element");
            return wettanbieter.get(0);
        }
    }

    /**
     * Gets the float from string.
     *
     * @param quote the quote
     * @return the float from string
     */
    private float getFloatFromString(String quote) {
        Float q = 0f;
        try {
            q = new Float(quote);
        } catch (Exception e) {
            logger.info("CONVERT ERROR can not convert " + quote + " to float");

        }
        return q;
    }

    /**
     * Gets the date from string.
     *
     * @param date the date
     * @return the date from string
     */


    /**
     * Gets the date format from string.
     *
     * @param date the date
     * @return the date format from string
     */
    public String getHQLDateFormatFromDate(Date date) {
        return new SimpleDateFormat("yyyy-MM-dd").format(date);
    }

    /**
     * Convert crawl infos.
     *
     * @param cf the cf
     * @param spieltyp the spieltyp
     * @return the begegnung
     */
    private Begegnung convertCrawlInfos(CrawlInfos cf, Spieltyp spieltyp) {

        Begegnung b = new Begegnung();
        b.setMannschaft_1(cf.getErsteMannschaft());
        b.setMannschaft_2(cf.getZweiteMannschaft());
        b.setDatum(cf.getDate());
        b.setSpieltyp(spieltyp);
        return b;
    }

    /**
     * Convert crawl infos.
     *
     * @param crawlInfos the crawl infos
     * @param begegnung the begegnung
     * @return the quote
     */
    private Quote convertCrawlInfos(CrawlInfos crawlInfos, Begegnung begegnung) {
        Quote quote = new Quote();
        quote.setQuoteM1(getFloatFromString(crawlInfos.getHeimMannschaftQuote()));
        quote.setQuoteX(getFloatFromString(crawlInfos.getUnentschiedenQuote()));
        quote.setQuoteM2(getFloatFromString(crawlInfos.getZweiteMannschaftQuote()));
        quote.setBegegnung(begegnung);
        return quote;
    }

    /**
     * Gets the session factory.
     *
     * @return the session factory
     */
    public SessionFactory getSessionFactory() {
        if (sessionFactory == null) {
            // loads configuration and mappings
            Configuration configuration = new Configuration().configure();
            ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties()).build();

            // builds a session factory from the service registry
            sessionFactory = configuration.buildSessionFactory(serviceRegistry);
        }
        return sessionFactory;
    }

    /**
     * Prints the begegnung.
     *
     * @param b the b
     * @return the string
     */
    private String printBegegnung(Begegnung b) {
        return "Begegnung: " + b.getMannschaft_1() + " vs " + b.getMannschaft_2() + " am: " + b.getDatum();
    }

    /**
     * Prints the wettanbieter.
     *
     * @param w the w
     * @return the string
     */
    private String printWettanbieter(Wettanbieter w) {
        return "Wettanbieter: " + w.getName();
    }

    /**
     * Prints the spieltyp.
     *
     * @param s the s
     * @return the string
     */
    private String printSpieltyp(Spieltyp s) {
        return "Spieltyp: " + s.getName();
    }

    /**
     * Prints the quote.
     *
     * @param q the q
     * @return the string
     */
    private String printQuote(Quote q) {
        return "Quoten : " + q.getBegegnung().getMannschaft_1() + " " + q.getQuoteM1() + "|" + q.getQuoteX() + "|" + q.getQuoteM2() + " "
                + q.getBegegnung().getMannschaft_2() + " Datum: " + q.getBegegnung().getDatum();
    }

    /**
     * Prints the crawl infos.
     *
     * @param cf the cf
     * @return the string
     */
    private String printCrawlInfos(CrawlInfos cf) {
        String info = "CrawlInfos: " + cf.getErsteMannschaft() + " vs " + cf.getZweiteMannschaft() + " am :"
                + cf.getDate();
        return info;
    }
    
    private String printHistoryQuote(HistoryQuote hq){
        return "Quote change by:"+printQuote(hq.getQuote())+" \n\r to :"+hq.getQuote1()+"|"+hq.getQuoteX()+"|"+hq.getQuote2();
    }

}
