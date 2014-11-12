package webcrawler;

import java.util.Date;

public class CrawlInfos {

    private String ersteMannschaft;
    private String heimMannschaftQuote;
    private String unentschiedenQuote;
    private String zweiteMannschaft;
    private String zweiteMannschaftQuote;
    private Date date;

    public String getErsteMannschaft() {
        return ersteMannschaft;
    }

    public void setErsteMannschaft(String ersteMannschaft) {
        this.ersteMannschaft = ersteMannschaft;
    }

    public String getZweiteMannschaft() {
        return zweiteMannschaft;
    }

    public void setZweiteMannschaft(String zweiteMannschaft) {
        this.zweiteMannschaft = zweiteMannschaft;
    }

    public void setHeimMannschaftQuote(String heimMannschaftQuote) {
        this.heimMannschaftQuote = heimMannschaftQuote;
    }

    public void setUnentschiedenQuote(String unentschiedenQuote) {
        this.unentschiedenQuote = unentschiedenQuote;
    }

    public String getHeimMannschaftQuote() {
        return heimMannschaftQuote;
    }

    public String getUnentschiedenQuote() {
        return unentschiedenQuote;
    }

    
    public String getZweiteMannschaftQuote() {
        return zweiteMannschaftQuote;
    }

    
    public void setZweiteMannschaftQuote(String zweiteMannschaftQuote) {
        this.zweiteMannschaftQuote = zweiteMannschaftQuote;
    }
    
    public void print(){
        System.out.println(this.getErsteMannschaft()+" "+this.getHeimMannschaftQuote()+" | "+this.getUnentschiedenQuote()+" | "+this.getZweiteMannschaft()+" "+ this.getZweiteMannschaftQuote());
    }
}
