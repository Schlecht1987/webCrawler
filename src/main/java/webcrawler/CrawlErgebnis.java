package webcrawler;

import java.text.SimpleDateFormat;
import java.util.Date;


// TODO: Auto-generated Javadoc
/**
 * POJO Klasse . 
 * The Class CrawlErgebnis.
 */
public class CrawlErgebnis {
    
    /** The mannschaft_1. */
    public String mannschaft_1;
    
    /** The mannschaft_2. */
    public String mannschaft_2;
    
    /** The sieger. */
    public String sieger;
    
    /** The date. */
    public Date date;
    
    /** The tore_1. */
    public int tore_1;
    
    /** The tore_2. */
    public int tore_2;
    
    /** The h_tore_1. */
    public int h_tore_1;
    
    /** The h_tore_2. */
    public int h_tore_2;
    
    /**
     * Gets the mannschaft_1.
     *
     * @return the mannschaft_1
     */
    public String getMannschaft_1() {
        return mannschaft_1;
    }
    
    /**
     * Sets the mannschaft_1.
     *
     * @param mannschaft_1 the new mannschaft_1
     */
    public void setMannschaft_1(String mannschaft_1) {
        this.mannschaft_1 = mannschaft_1;
    }
    
    /**
     * Gets the mannschaft_2.
     *
     * @return the mannschaft_2
     */
    public String getMannschaft_2() {
        return mannschaft_2;
    }
    
    /**
     * Sets the mannschaft_2.
     *
     * @param mannschaft_2 the new mannschaft_2
     */
    public void setMannschaft_2(String mannschaft_2) {
        this.mannschaft_2 = mannschaft_2;
    }
    
    /**
     * Gets the sieger.
     *
     * @return the sieger
     */
    public String getSieger() {
        return sieger;
    }
    
    /**
     * Sets the sieger.
     *
     * @param sieger the new sieger
     */
    public void setSieger(String sieger) {
        this.sieger = sieger;
    }
    

    
    /**
     * Gets the tore_1.
     *
     * @return the tore_1
     */
    public int getTore_1() {
        return tore_1;
    }
    
    /**
     * Sets the tore_1.
     *
     * @param tore_1 the new tore_1
     */
    public void setTore_1(int tore_1) {
        this.tore_1 = tore_1;
    }
    
    /**
     * Gets the tore_2.
     *
     * @return the tore_2
     */
    public int getTore_2() {
        return tore_2;
    }
    
    /**
     * Sets the tore_2.
     *
     * @param tore_2 the new tore_2
     */
    public void setTore_2(int tore_2) {
        this.tore_2 = tore_2;
    }
    
    /**
     * Gets the h_tore_1.
     *
     * @return the h_tore_1
     */
    public int getH_tore_1() {
        return h_tore_1;
    }
    
    /**
     * Sets the h_tore_1.
     *
     * @param h_tore_1 the new h_tore_1
     */
    public void setH_tore_1(int h_tore_1) {
        this.h_tore_1 = h_tore_1;
    }
    
    /**
     * Gets the h_tore_2.
     *
     * @return the h_tore_2
     */
    public int getH_tore_2() {
        return h_tore_2;
    }
    
    /**
     * Sets the h_tore_2.
     *
     * @param h_tore_2 the new h_tore_2
     */
    public void setH_tore_2(int h_tore_2) {
        this.h_tore_2 = h_tore_2;
    }

    /**
     * Prints the.
     *
     * @return the string
     */
    public String print(){
        String temp = "  "+getHQLDateFormatFromDate(getDate())+" Sieger:"+getSieger()+" | "+getMannschaft_1()+" ";
        temp += getTore_1()+":"+getTore_2()+" "+getMannschaft_2()+"    Halbzeit:("+getH_tore_1()+":"+getH_tore_2()+")";
        return temp;
    }

    
    /**
     * Gets the date.
     *
     * @return the date
     */
    public Date getDate() {
        return date;
    }

    
    /**
     * Sets the date.
     *
     * @param date the new date
     */
    public void setDate(Date date) {
        this.date = date;
    }
    
    /**
     * Gets the HQL date format from date.
     *
     * @param date the date
     * @return the HQL date format from date
     */
    private static String getHQLDateFormatFromDate(Date date) {
        return new SimpleDateFormat("yyyy-MM-dd").format(date);
    }
}
