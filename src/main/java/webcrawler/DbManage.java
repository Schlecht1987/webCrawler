package webcrawler;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import mapping.Begegnung;
import mapping.Mannschaft;

public class DbManage {
    public  SessionFactory  sessionFactory;
    private  final Logger logger = LoggerFactory.getLogger(DbManage.class);
    
    
    public DbManage(){
        sessionFactory = getSessionFactory();
    }

    public  Mannschaft checkMannschaft(String mannschaft, String land) {
        List<Mannschaft> mannschaftList = getManschaftListByName(mannschaft);
        Session session = sessionFactory.openSession();

        if (mannschaftList.size() == 1) {
            logger.info("Found exactly one Mannschaft: "+mannschaftList.get(0).getName());
            return mannschaftList.get(0);
        } else if (mannschaftList.size() < 1 || mannschaftList == null) {
            if(mannschaftList == null)
            {
                logger.info("Query Mannschaftslist was null");
            }else
            {
                logger.info("no Mannschaft found: begin to create new Mannschaft");
            }
            try {
                session.beginTransaction();
                Mannschaft m = new Mannschaft(mannschaft, land);
                session.save(m);
                session.getTransaction().commit();
                return m;
            } catch (Exception e) {
                if (session.getTransaction() != null)
                    session.getTransaction().rollback();
                logger.info("Error in checkMannschaft: cant save new Mannschaft");
                e.printStackTrace();
            } finally {
                session.close();
            }
            return null;
        } else {
            logger.info("ERROR: More then one Mannschaft found");
            for (Mannschaft list : mannschaftList) {
                logger.debug("Found :" + list.getName());
            }
            return mannschaftList.get(0);
        }

    }

    private  List<Mannschaft> getManschaftListByName(String name) {
        Session session = sessionFactory.openSession();
        List<Mannschaft> mannschaften = null;
        try {
            session.beginTransaction();
            Query query = session.createQuery("from Mannschaft where name = '" + name + "'");
            mannschaften = (List<Mannschaft>) query.list();
            session.getTransaction().commit();
        } catch (Exception e) {
            if (session.getTransaction() != null)
                session.getTransaction().rollback();
            logger.info("Error in getMannschaftListByName: query fail");
            e.printStackTrace();
        } finally {
            session.close();
        }
        return mannschaften;
    }
    
    private List<Begegnung> getBegegnungsList(){
        Session session = sessionFactory.openSession();
        List<Begegnung> begegnungen = null;
        try {
            session.beginTransaction();
            Query query = session.createQuery("from Begegnung where date = '");
            begegnungen = (List<Begegnung>) query.list();
            session.getTransaction().commit();
        } catch (Exception e) {
            if (session.getTransaction() != null)
                session.getTransaction().rollback();
            logger.info("Error in getMannschaftListByName: query fail");
            e.printStackTrace();
        } finally {
            session.close();
        }
        return begegnungen;
    }
    
    public  SessionFactory getSessionFactory() {
        if (sessionFactory == null) {
            // loads configuration and mappings
            Configuration configuration = new Configuration().configure();
            ServiceRegistry serviceRegistry
                = new StandardServiceRegistryBuilder()
                    .applySettings(configuration.getProperties()).build();
             
            // builds a session factory from the service registry
            sessionFactory = configuration.buildSessionFactory(serviceRegistry);           
        }
         
        return sessionFactory;
    }

}
