package main;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import webcrawler.Bwin;
import webcrawler.CrawlErgebnis;
import webcrawler.CrawlInfos;
import webcrawler.WebCrawler;

public class ReadCSV {

    private final Logger logger = LoggerFactory.getLogger(ReadCSV.class);

    public void run() {

        String csvFile = "oldDatabasejs.csv";
        BufferedReader br = null;
        String line = "";
        String cvsSplitBy = ",";

        try {

            br = new BufferedReader(new FileReader(csvFile));
            while ((line = br.readLine()) != null) {

                // use comma as separator
                String[] data = line.split(cvsSplitBy);

                CrawlInfos cf = new CrawlInfos();
                cf.setDate(getDateFromCrawlInfosString(data[0]));
                cf.setErsteMannschaft(data[1].replace("\"", ""));
                cf.setZweiteMannschaft(data[2].replace("\"", ""));
                cf.setSpieltyp(data[3].replace("\"", ""));
                cf.setHeimMannschaftQuote(data[4]);
                cf.setUnentschiedenQuote(data[5]);
                cf.setZweiteMannschaftQuote(data[6]);
                cf.setWettanbieter("Bwin");

                CrawlErgebnis ce = new CrawlErgebnis();
                ce.setDate(getDateFromCrawlInfosString(data[0]));
                ce.setH_tore_1(new Integer(data[7]));
                ce.setTore_1(new Integer(data[8]));
                ce.setH_tore_2(new Integer(data[9]));
                ce.setTore_2(new Integer(data[10]));
                ce.setSieger(data[11]);
                ce.setMannschaft_1(data[1].replace("\"", ""));
                ce.setMannschaft_2(data[2].replace("\"", ""));

                System.out.println(cf.print());
                System.out.println(ce.print());
                
           

                   WebCrawler.dbmanage.saveCrawledInfo(cf);
                 WebCrawler.dbmanage.saveCrawlErgebnis(ce);
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        System.out.println("Done");
    }

    private Date getDateFromCrawlInfosString(String date) {
        Date d;
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        try {
            d = formatter.parse(date+" 12:00");
        } catch (ParseException e) {
            logger.error("CONVERT ERROR can not convert " + date + " to Date");
            Calendar c1 = GregorianCalendar.getInstance();
            c1.set(1753, Calendar.JANUARY, 01);
            d = new Date(c1.getTimeInMillis());
        }
        return d;
    }

 

}
