package webcrawler;

import org.openqa.selenium.By;

// TODO: Auto-generated Javadoc
/**
 * The Class XPath.
 */
public class XPath {

    //-----------------BEGEGNUNG------------------------
    /**
     * Gets the anzahl spieltage.
     *
     * @return the anzahl spieltage
     */
    public static String getAnzahlSpieltage() {
        return "//*[@id='markets']/div[1]/div/ul/li/ul/li";
    }

    /**
     * Gets the spieltag.
     *
     * @param i the i
     * @return the spieltag
     */
    public static String getSpieltag(int i) {
        return "//*[@id='markets']/div[1]/div/ul/li/ul/li[" + i + "]/h2";
    }

    /**
     * Gets the anzahl spiele.
     *
     * @param i the i
     * @return the anzahl spiele
     */
    public static String getAnzahlSpiele(int i) {
        return "//*[@id='markets']/div[1]/div/ul/li/ul/li[" + i + "]/ul/li";
    }

    /**
     * Gets the begegnung.
     *
     * @param i the i
     * @param j the j
     * @return the begegnung
     */
    public static String getBegegnung(int i, int j) {
        return "//*[@id='markets']/div[1]/div/ul/li/ul/li[" + i + "]/ul/li[" + j + "]/div/div/ul/li/div/table/tbody/tr/";
    }
    
    /**
     * Gets the uhrzeit.
     *
     * @param i the i
     * @param j the j
     * @return the uhrzeit
     */
    public static String getUhrzeit(int i, int j){
        return "//*[@id='markets']/div[1]/div/ul/li/ul/li[" + i + "]/ul/li[" + j + "]/div/div/ul/li/div/h6";
    }

    /**
     * Gets the erste mannschaft.
     *
     * @return the erste mannschaft
     */
    public static String getErsteMannschaft() {
        return getBegegnungsPath(1, 2);
    }

    /**
     * Gets the erste mannschaft quote.
     *
     * @return the erste mannschaft quote
     */
    public static String getErsteMannschaftQuote() {
        return getBegegnungsPath(1, 1);
    }

    /**
     * Gets the unentschieden quote.
     *
     * @return the unentschieden quote
     */
    public static String getUnentschiedenQuote() {
        return getBegegnungsPath(2, 1);
    }

    /**
     * Gets the zweite mannschaft.
     *
     * @return the zweite mannschaft
     */
    public static String getZweiteMannschaft() {
        return getBegegnungsPath(3, 2);
    }

    /**
     * Gets the zweite mannschaft quote.
     *
     * @return the zweite mannschaft quote
     */
    public static String getZweiteMannschaftQuote() {
        return getBegegnungsPath(3, 1);
    }
    
    /**
     * Gets the begegnungs path.
     *
     * @param i the i
     * @param j the j
     * @return the begegnungs path
     */
    private static String getBegegnungsPath(int i, int j) {
        return "td[" + i + "]/form/button/span[" + j + "]";
    }
    //--------------ERGEBNIS-----------------------------
    /**
     * Gets the anzahl ergebnise.
     *
     * @return the anzahl ergebnise
     */
    public static String getAnzahlErgebnise(){
        return "//*[@id='result-items']/div";
    }
    
    /**
     * Gets the eregebnis tag.
     *
     * @param i the i
     * @return the eregebnis tag
     */
    public static String getEregebnisTag(int i){
        return "//*[@id='result-items']/div["+i+"]/h3";
    }
        
    /**
     * Gets the anzahl ergebnis.
     *
     * @param i the i
     * @return the anzahl ergebnis
     */
    public static String getAnzahlErgebnis(int i){
        return "//*[@id='result-items']/div["+i+"]/table/tbody/tr";
    }
    
    /**
     * Gets the ergebnis.
     *
     * @param i the i
     * @param j the j
     * @return the ergebnis
     */
    public static String getErgebnis(int i, int j){
        return "//*[@id='result-items']/div["+i+"]/table/tbody/tr["+j+"]";
    }
    
    /**
     * Gets the ergebnis mannschaften.
     *
     * @param i the i
     * @param j the j
     * @return the ergebnis mannschaften
     */
    public static String getErgebnisMannschaften(int i, int j){
        
        return "//*[@id='result-items']/div["+i+"]/table/tbody/tr["+j+"]/td[2]";
    }
    
    /**
     * Gets the ergebnis tore.
     *
     * @param i the i
     * @param j the j
     * @return the ergebnis tore
     */
    public static String getErgebnisTore(int i, int j){
        
        return "//*[@id='result-items']/div["+i+"]/table/tbody/tr["+j+"]/td[3]";
    }
    
    /**
     * Gets the ergebnis uhrzeit.
     *
     * @param i the i
     * @param j the j
     * @return the ergebnis uhrzeit
     */
    public static String getErgebnisUhrzeit(int i, int j){
        return "//*[@id='result-items']/div["+i+"]/table/tbody/tr["+j+"]/td[1]";
    }

}
