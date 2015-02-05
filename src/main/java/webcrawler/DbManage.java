package webcrawler;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

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

    private Boolean updateObject(Object o, String info) {
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

    private Boolean deleteObject(Object o, String info) {
        Session session = sessionFactory.openSession();
        try {
            session.beginTransaction();
            session.delete(o);
            session.getTransaction().commit();
            logger.info("Sucessfully deleted 'Object': " + info);
            return true;
        } catch (Exception e) {
            if (session.getTransaction() != null)
                session.getTransaction().rollback();
            logger.info("Error in delete Oject:  fail to save: " + info);
            e.printStackTrace();
        } finally {
            session.close();
        }
        return false;
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

    public void deleteBegegnung(String mannschaft_1, String mannschaft_2, Date date) {
        Begegnung b = getBegegnung(getMannschaftFromString(mannschaft_1).getId(), getMannschaftFromString(mannschaft_2).getId(), date);
        List<Quote> quoten = (List<Quote>) getQuery(MakeQuery.getQuoteFromBegegnungsId(b.getId()));
        for (Quote quote : quoten) {
            List<HistoryQuote> hQuoten = (List<HistoryQuote>) getQuery(MakeQuery.getHistoryQuoteFromQuoteId(quote.getId()));
            for (HistoryQuote historyQuote : hQuoten) {
                deleteObject(historyQuote, printHistoryQuote(historyQuote));
            }
            deleteObject(quote, printQuote(quote));
        }
        deleteObject(b, printBegegnung(b));

    }

    public void deleteCompleteSpieltypQuery() {

        List<HistoryQuote> list = (List<HistoryQuote>) getQuery("from HistoryQuote");
        for (HistoryQuote hq : list) {
            if (hq.getQuote().getBegegnung().getSpieltyp().getId() == getSpieltypByName("Lega Pro A").getId()) {
                Begegnung b = hq.getQuote().getBegegnung();
                Quote q = hq.getQuote();
                deleteObject(hq, printHistoryQuote(hq));
                deleteObject(q, printQuote(q));
                deleteObject(b, printBegegnung(b));

            }
            logger.info("Found nothing to delete");
        }

        List<Quote> qList = (List<Quote>) getQuery("from Quote");
        for (Quote q : qList) {
            if (q.getBegegnung().getSpieltyp().getId() == getSpieltypByName("Lega Pro A").getId()) {
                Begegnung b = q.getBegegnung();
                deleteObject(q, printQuote(q));
                deleteObject(b, printBegegnung(b));

            }
            logger.info("Found nothing to delete" + qList.size());
            logger.info("ID" + q.getBegegnung().getSpieltyp().getId());
        }

        List<Begegnung> bList = (List<Begegnung>) getQuery("from Begegnung");
        for (Begegnung b : bList) {
            if (b.getSpieltyp().getId() == getSpieltypByName("Lega Pro A").getId()) {

                deleteObject(b, printBegegnung(b));

            }
            logger.info("Found nothing to delete" + qList.size());

        }
        deleteObject(getSpieltypByName("Lega Pro A"), "SPIELTYP LEGA PRO A");

    }

    /**
     * Save crawled info.
     *
     * @param cf the cf
     */
    public void saveCrawledInfo(CrawlInfos cf) {
        Mannschaft m1 = createMannschaftIfNotExists(cf.getErsteMannschaft());
        Mannschaft m2 = createMannschaftIfNotExists(cf.getZweiteMannschaft());
        if (checkIfBegegnungAlreadyExist(m1.getId(), m2.getId(), cf.getDate())) {
            logger.info("Match already exists. saving aborted!");
            Begegnung b = getBegegnung(m1.getId(), m2.getId(), cf.getDate());
            List<Quote> list = (List<Quote>) getQuery(MakeQuery.getQuoteFromBegegnungsId(b.getId()));
            if (list.size() == 1) {
                Wettanbieter w = getWettanbieterByName(cf.getWettanbieter());
                Quote latest = convertCrawlInfos(cf, b, w);
                Quote old = list.get(0);
                //Wenn die Quote nicht gleich ist
                logger.info("checking if 'Quote' has changed");
                if (!compareQuoteWithCrawlInfos(old, latest)) {
                    logger.info("Quote Changed: Update Quote and save old to History");
                    updateQuoteAndSaveToHistory(old, latest);
                } else {
                    logger.info("Quote has not changed");
                }
            } else if (list.size() == 0) {
                logger.error("Found no 'Quote' for match: " + printBegegnung(b));
            } else {
                logger.error("Found more then one 'Quote' for match: " + printBegegnung(b));
            }

        } else {
            logger.info("match doesnt exists in database. save match to database");
            Spieltyp s = getSpieltypByName(cf.getSpieltyp());
            Wettanbieter w = getWettanbieterByName(cf.getWettanbieter());
            Begegnung b = convertCrawlInfos(cf, s, m1, m2);
            saveObject(b, printBegegnung(b));
            Quote q = convertCrawlInfos(cf, b, w);
            saveObject(q, printQuote(q));
        }

    }

    public void saveCrawlErgebnis(CrawlErgebnis ce) {

        if (checkIfMannschaftAlreadyExist(ce.getMannschaft_1()) && checkIfMannschaftAlreadyExist(ce.getMannschaft_2())) {
            int id_m1 = getMannschaftFromString(ce.getMannschaft_1()).getId();
            int id_m2 = getMannschaftFromString(ce.getMannschaft_2()).getId();
            if (checkIfBegegnungAlreadyExist(id_m1, id_m1, ce.getDate())) {
                logger.info("found match for result");
                Begegnung b = getBegegnung(id_m1, id_m2, ce.getDate());
                if (checkIfEregebnisAlreadySet(b)) {
                    logger.info(" result already exists for match: saving aborted");
                } else {
                    Ergebnis e = convertCrawlErgebnisToErgebnis(ce, b);
                    saveObject(e, printErgebnis(e));
                }

            }else
            {
                logger.info("found NO match for result");
            }
            
        }else
        {
            logger.error("Keine Mannschaft gefunden für das Ergebnis");
        }

    }

    private Boolean checkIfEregebnisAlreadySet(Begegnung b) {
        List<Ergebnis> erg = (List<Ergebnis>) getQuery(MakeQuery.checkIfBegegnungHasAlreadyAErebnis(b.getId()));
        if (erg.size() > 0) {
            return true;
        }
        return false;
    }

    private Ergebnis convertCrawlErgebnisToErgebnis(CrawlErgebnis ce, Begegnung b) {
        Ergebnis e = new Ergebnis();
        e.setM1_h_tore(ce.getH_tore_1());
        e.setM2_h_tore(ce.getH_tore_2());
        e.setM1_tore(ce.getTore_1());
        e.setM2_tore(ce.getTore_2());
        e.setSieger(ce.getSieger());
        e.setBegegnung(b);
        return e;
    }

    private void updateQuoteAndSaveToHistory(Quote old, Quote latest) {
        logger.info("FOUND CHNAGED QUOTE");
        HistoryQuote hq = new HistoryQuote();
        hq.setDatum(new Date());
        hq.setQuote(old);
        hq.setQuote1(old.getQuoteM1());
        hq.setQuote2(old.getQuoteM2());
        hq.setQuoteX(old.getQuoteX());

        old.setQuoteM1(latest.getQuoteM1());
        old.setQuoteM2(latest.getQuoteM2());
        old.setQuoteX(latest.getQuoteX());
        updateObject(old, printQuote(old));
        saveObject(hq, printHistoryQuote(hq));
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
    private Boolean checkIfBegegnungAlreadyExist(int mannschaft_1, int mannschaft_2, Date date) {
        List<Begegnung> begegnungen = null;
        begegnungen = (List<Begegnung>) getQuery(MakeQuery.getSpecificBegegnungsQuery(mannschaft_1, mannschaft_2, date));
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

    private Begegnung getBegegnung(int mannschaft_1, int mannschaft_2, Date date) {
        List<Begegnung> begegnungen = null;
        begegnungen = (List<Begegnung>) getQuery(MakeQuery.getSpecificBegegnungsQuery(mannschaft_1, mannschaft_2, date));
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

    private Boolean checkIfMannschaftAlreadyExist(String man) {
        List<Mannschaft> mannschaft = null;
        mannschaft = (List<Mannschaft>) getQuery(MakeQuery.getMannschaftFromStringQuery(man));
        if (mannschaft.size() == 1) {
            return true;
        } else if (mannschaft.size() == 0) {
            return false;
        } else {
            logger.error("Error in checkIfMannschaftAlreadyExist: Found same Mannschaft more then once");
            for (Mannschaft m : mannschaft) {
                logger.info(m.getName());
            }
            return true;
        }
    }

    private Mannschaft getMannschaftFromString(String man) {
        List<Mannschaft> mannschaft = null;
        mannschaft = (List<Mannschaft>) getQuery(MakeQuery.getMannschaftFromStringQuery(man));
        if (mannschaft.size() == 1) {
            return mannschaft.get(0);
        } else if (mannschaft.size() == 0) {
            return null;
        } else {
            logger.error("Error in getMannschaftFromString: Found same Mannschaft more then once");
            for (Mannschaft m : mannschaft) {
                logger.info(m.getName());
            }
            return mannschaft.get(0);
        }
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

    private Mannschaft createMannschaftIfNotExists(String name) {
        Mannschaft m;
        if (checkIfMannschaftAlreadyExist(name)) {
            m = getMannschaftFromString(name);
        } else {
            m = new Mannschaft();
            m.setName(name);
            saveObject(m, printMannschaft(m));
        }
        return m;
    }

    /**
     * Convert crawl infos.
     *
     * @param cf the cf
     * @param spieltyp the spieltyp
     * @return the begegnung
     */
    private Begegnung convertCrawlInfos(CrawlInfos cf, Spieltyp spieltyp, Mannschaft m1, Mannschaft m2) {
        Begegnung b = new Begegnung();
        b.setMannschaft_1(m1);
        b.setMannschaft_2(m2);
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
    private Quote convertCrawlInfos(CrawlInfos crawlInfos, Begegnung begegnung, Wettanbieter w) {
        Quote quote = new Quote();
        quote.setQuoteM1(getFloatFromString(crawlInfos.getHeimMannschaftQuote()));
        quote.setQuoteX(getFloatFromString(crawlInfos.getUnentschiedenQuote()));
        quote.setQuoteM2(getFloatFromString(crawlInfos.getZweiteMannschaftQuote()));
        quote.setBegegnung(begegnung);
        quote.setWettanbieter(w);
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
        String info = "CrawlInfos: " + cf.getErsteMannschaft() + " vs " + cf.getZweiteMannschaft() + " am :" + cf.getDate();
        return info;
    }

    private String printHistoryQuote(HistoryQuote hq) {
        return "HistoryQuote: Quote change from:" + printQuote(hq.getQuote()) + "  to :" + hq.getQuote1() + "|" + hq.getQuoteX() + "|"
                + hq.getQuote2();
    }

    private String printErgebnis(Ergebnis e) {
        return "Ergebnis: " + e.getBegegnung().getMannschaft_1() + " vs " + e.getBegegnung().getMannschaft_2() + " " + e.getM1_tore() + ":"
                + e.getM2_tore() + " (" + e.getM1_h_tore() + ":" + e.getM2_h_tore() + ")";
    }

    private String printMannschaft(Mannschaft m) {
        return "Mannschaft: " + m.getName();
    }

}
