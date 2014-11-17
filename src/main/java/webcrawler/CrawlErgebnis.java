package webcrawler;

import java.text.SimpleDateFormat;
import java.util.Date;


public class CrawlErgebnis {
    public String mannschaft_1;
    public String mannschaft_2;
    public String sieger;
    public Date date;
    public int tore_1;
    public int tore_2;
    public int h_tore_1;
    public int h_tore_2;
    
    public String getMannschaft_1() {
        return mannschaft_1;
    }
    
    public void setMannschaft_1(String mannschaft_1) {
        this.mannschaft_1 = mannschaft_1;
    }
    
    public String getMannschaft_2() {
        return mannschaft_2;
    }
    
    public void setMannschaft_2(String mannschaft_2) {
        this.mannschaft_2 = mannschaft_2;
    }
    
    public String getSieger() {
        return sieger;
    }
    
    public void setSieger(String sieger) {
        this.sieger = sieger;
    }
    

    
    public int getTore_1() {
        return tore_1;
    }
    
    public void setTore_1(int tore_1) {
        this.tore_1 = tore_1;
    }
    
    public int getTore_2() {
        return tore_2;
    }
    
    public void setTore_2(int tore_2) {
        this.tore_2 = tore_2;
    }
    
    public int getH_tore_1() {
        return h_tore_1;
    }
    
    public void setH_tore_1(int h_tore_1) {
        this.h_tore_1 = h_tore_1;
    }
    
    public int getH_tore_2() {
        return h_tore_2;
    }
    
    public void setH_tore_2(int h_tore_2) {
        this.h_tore_2 = h_tore_2;
    }

    public String print(){
        String temp = "  "+getHQLDateFormatFromDate(getDate())+" Sieger:"+getSieger()+" | "+getMannschaft_1()+" ";
        temp += getTore_1()+":"+getTore_2()+" "+getMannschaft_2()+"    Halbzeit:("+getH_tore_1()+":"+getH_tore_2()+")";
        return temp;
    }

    
    public Date getDate() {
        return date;
    }

    
    public void setDate(Date date) {
        this.date = date;
    }
    private static String getHQLDateFormatFromDate(Date date) {
        return new SimpleDateFormat("yyyy-MM-dd").format(date);
    }
}
