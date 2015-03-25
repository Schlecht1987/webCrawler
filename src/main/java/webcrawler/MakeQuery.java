package webcrawler;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;



// TODO: Auto-generated Javadoc
/**
 * The Class MakeQuery.
 */
public class MakeQuery {
    
    /**
     * Gets the specific begegnungs query.
     *
     * @param mannschaft_1 the mannschaft_1
     * @param mannschaft_2 the mannschaft_2
     * @param date the date
     * @return the specific begegnungs query
     */
    public static String getSpecificBegegnungsQuery(int mannschaft_1,int mannschaft_2, Date date){
        Calendar calfrom = Calendar.getInstance();
        Calendar caluntil = Calendar.getInstance();
        calfrom.setTime(date);
        caluntil.setTime(date);
        calfrom.set(Calendar.HOUR_OF_DAY,0);
        caluntil.set(Calendar.HOUR_OF_DAY,23);
        
        String query = "from Begegnung where datum BETWEEN '" +getHQLDateFormatFromDate(calfrom.getTime()) + "'AND'"+getHQLDateFormatFromDate(caluntil.getTime()) +"' AND mannschaft_1 = " + mannschaft_1
                + " AND mannschaft_2 = " + mannschaft_2 + " ";
        return query;
    }
    
    /**
     * Gets the begegnung by id.
     *
     * @param id the id
     * @return the begegnung by id
     */
    public static String getBegegnungById(int id){
        String query = "from Begegnung where id = "+id+"";
        return query;
    }
    
    /**
     * Gets the mannschaft from string query.
     *
     * @param mannschaft the mannschaft
     * @return the mannschaft from string query
     */
    public static String getMannschaftFromStringQuery(String mannschaft){
        String query = "from Mannschaft where name ='"+mannschaft+"' ";
        return query;
    }
    
    /**
     * Check if begegnung has already a erebnis.
     *
     * @param begegnungsID the begegnungs id
     * @return the string
     */
    public static String checkIfBegegnungHasAlreadyAErebnis(int begegnungsID)
    {
        String query = "from Ergebnis where begegnung = "+begegnungsID;
        return query;
    }
    
    /**
     * Gets the spieltyp by name query.
     *
     * @param name the name
     * @return the spieltyp by name query
     */
    public static String getSpieltypByNameQuery(String name){
        return "from Spieltyp where name = '" + name + "'";
    }
    
    /**
     * Gets the wettanbieter by name query.
     *
     * @param name the name
     * @return the wettanbieter by name query
     */
    public static String getWettanbieterByNameQuery(String name){
        return "from Wettanbieter where name = '" + name + "'";
    }
    
    /**
     * Gets the quote from begegnungs id.
     *
     * @param id the id
     * @return the quote from begegnungs id
     */
    public static String getQuoteFromBegegnungsId(int id){
        return "from Quote where begegnung = "+id;
    }
    
    /**
     * Gets the history quote from quote id.
     *
     * @param id the id
     * @return the history quote from quote id
     */
    public static String getHistoryQuoteFromQuoteId(int id){
        return "from HistoryQuote where quote = "+id;
    }
    
    /**
     * Gets the HQL date format from date.
     *
     * @param date the date
     * @return the HQL date format from date
     */
    private static String getHQLDateFormatFromDate(Date date) {
        return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date);
    }

}
