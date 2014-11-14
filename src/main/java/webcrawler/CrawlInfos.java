package webcrawler;

import java.util.Date;

// TODO: Auto-generated Javadoc
/**
 * The Class CrawlInfos.
 */
public class CrawlInfos {

    /** The erste mannschaft. */
    private String ersteMannschaft;
    
    /** The heim mannschaft quote. */
    private String heimMannschaftQuote;
    
    /** The unentschieden quote. */
    private String unentschiedenQuote;
    
    /** The zweite mannschaft. */
    private String zweiteMannschaft;
    
    /** The zweite mannschaft quote. */
    private String zweiteMannschaftQuote;
    
    /** The date. */
    private Date date;
    
    /** The spieltyp. */
    private String spieltyp;
    
    /** The wettanbieter. */
    private String wettanbieter;

    /**
     * Gets the erste mannschaft.
     *
     * @return the erste mannschaft
     */
    public String getErsteMannschaft() {
        return ersteMannschaft;
    }

    /**
     * Sets the erste mannschaft.
     *
     * @param ersteMannschaft the new erste mannschaft
     */
    public void setErsteMannschaft(String ersteMannschaft) {
        this.ersteMannschaft = ersteMannschaft;
    }

    /**
     * Gets the zweite mannschaft.
     *
     * @return the zweite mannschaft
     */
    public String getZweiteMannschaft() {
        return zweiteMannschaft;
    }

    /**
     * Sets the zweite mannschaft.
     *
     * @param zweiteMannschaft the new zweite mannschaft
     */
    public void setZweiteMannschaft(String zweiteMannschaft) {
        this.zweiteMannschaft = zweiteMannschaft;
    }

    /**
     * Sets the heim mannschaft quote.
     *
     * @param heimMannschaftQuote the new heim mannschaft quote
     */
    public void setHeimMannschaftQuote(String heimMannschaftQuote) {
        this.heimMannschaftQuote = heimMannschaftQuote;
    }

    /**
     * Sets the unentschieden quote.
     *
     * @param unentschiedenQuote the new unentschieden quote
     */
    public void setUnentschiedenQuote(String unentschiedenQuote) {
        this.unentschiedenQuote = unentschiedenQuote;
    }

    /**
     * Gets the heim mannschaft quote.
     *
     * @return the heim mannschaft quote
     */
    public String getHeimMannschaftQuote() {
        return heimMannschaftQuote;
    }

    /**
     * Gets the unentschieden quote.
     *
     * @return the unentschieden quote
     */
    public String getUnentschiedenQuote() {
        return unentschiedenQuote;
    }

    
    /**
     * Gets the zweite mannschaft quote.
     *
     * @return the zweite mannschaft quote
     */
    public String getZweiteMannschaftQuote() {
        return zweiteMannschaftQuote;
    }

    
    /**
     * Sets the zweite mannschaft quote.
     *
     * @param zweiteMannschaftQuote the new zweite mannschaft quote
     */
    public void setZweiteMannschaftQuote(String zweiteMannschaftQuote) {
        this.zweiteMannschaftQuote = zweiteMannschaftQuote;
    }
    
    /**
     * Prints the.
     */
    public void print(){
        System.out.println(this.getErsteMannschaft()+" "+this.getHeimMannschaftQuote()+" | "+this.getUnentschiedenQuote()+" | "+this.getZweiteMannschaft()+" "+ this.getZweiteMannschaftQuote());
    }

    
   

    
    /**
     * Gets the spieltyp.
     *
     * @return the spieltyp
     */
    public String getSpieltyp() {
        return spieltyp;
    }

    
    /**
     * Sets the spieltyp.
     *
     * @param spieltyp the new spieltyp
     */
    public void setSpieltyp(String spieltyp) {
        this.spieltyp = spieltyp;
    }

    
    /**
     * Gets the wettanbieter.
     *
     * @return the wettanbieter
     */
    public String getWettanbieter() {
        return wettanbieter;
    }

    
    /**
     * Sets the wettanbieter.
     *
     * @param wettanbieter the new wettanbieter
     */
    public void setWettanbieter(String wettanbieter) {
        this.wettanbieter = wettanbieter;
    }

    
    public Date getDate() {
        return date;
    }

    
    public void setDate(Date date) {
        this.date = date;
    }

    

}
