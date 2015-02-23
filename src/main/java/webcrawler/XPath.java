package webcrawler;

import org.openqa.selenium.By;

public class XPath {

    //-----------------BEGEGNUNG------------------------
    public static String getAnzahlSpieltage() {
        return "//*[@id='markets']/div[1]/div/ul/li/ul/li";
    }

    public static String getSpieltag(int i) {
        return "//*[@id='markets']/div[1]/div/ul/li/ul/li[" + i + "]/h2";
    }

    public static String getAnzahlSpiele(int i) {
        return "//*[@id='markets']/div[1]/div/ul/li/ul/li[" + i + "]/ul/li";
    }

    public static String getBegegnung(int i, int j) {
        return "//*[@id='markets']/div[1]/div/ul/li/ul/li[" + i + "]/ul/li[" + j + "]/div/div/ul/li/div/table/tbody/tr/";
    }
    
    public static String getUhrzeit(int i, int j){
        return "//*[@id='markets']/div[1]/div/ul/li/ul/li[" + i + "]/ul/li[" + j + "]/div/div/ul/li/div/h6";
    }

    public static String getErsteMannschaft() {
        return getBegegnungsPath(1, 2);
    }

    public static String getErsteMannschaftQuote() {
        return getBegegnungsPath(1, 1);
    }

    public static String getUnentschiedenQuote() {
        return getBegegnungsPath(2, 1);
    }

    public static String getZweiteMannschaft() {
        return getBegegnungsPath(3, 2);
    }

    public static String getZweiteMannschaftQuote() {
        return getBegegnungsPath(3, 1);
    }
    
    private static String getBegegnungsPath(int i, int j) {
        return "td[" + i + "]/form/button/span[" + j + "]";
    }
    //--------------ERGEBNIS-----------------------------
    public static String getAnzahlErgebnise(){
        return "//*[@id='result-items']/div";
    }
    
    public static String getEregebnisTag(int i){
        return "//*[@id='result-items']/div["+i+"]/h3";
    }
        
    public static String getAnzahlErgebnis(int i){
        return "//*[@id='result-items']/div["+i+"]/table/tbody/tr";
    }
    public static String getErgebnis(int i, int j){
        return "//*[@id='result-items']/div["+i+"]/table/tbody/tr["+j+"]";
    }
    
    public static String getErgebnisMannschaften(int i, int j){
        
        return "//*[@id='result-items']/div["+i+"]/table/tbody/tr["+j+"]/td[2]";
    }
    
    public static String getErgebnisTore(int i, int j){
        
        return "//*[@id='result-items']/div["+i+"]/table/tbody/tr["+j+"]/td[3]";
    }
    
    public static String getErgebnisUhrzeit(int i, int j){
        return "//*[@id='result-items']/div["+i+"]/table/tbody/tr["+j+"]/td[1]";
    }

}
