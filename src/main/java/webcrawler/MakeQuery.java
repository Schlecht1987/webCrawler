package webcrawler;



// TODO: Auto-generated Javadoc
/**
 * The Class MakeQuery.
 */
public class MakeQuery {
    
    /**
     * Gets the specific begegnungs query.
     *
     * @param cf the cf
     * @return the specific begegnungs query
     */
    public static String getSpecificBegegnungsQuery(CrawlInfos cf){
        String query = "from Begegnung where datum = '" +WebCrawler.dbmanage.getHQLDateFormatFromDate(cf.getDate()) + "' AND mannschaft_1 = '" + cf.getErsteMannschaft()
                + "' AND mannschaft_2 = '" + cf.getZweiteMannschaft() + "' ";
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
        return "from Spieltyp where name = '" + name + "'";
    }
    
    public static String getQuoteFromBegegnungsId(int id){
        return "from Quote where begegnung = "+id;
    }

}
