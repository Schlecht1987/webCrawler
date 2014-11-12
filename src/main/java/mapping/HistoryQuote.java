package mapping;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table (name="HISTORY_QUOTE")
public class HistoryQuote {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private float quote1;
    private float quoteX;
    private float quote2;
    @Temporal(TemporalType.TIMESTAMP)
    private Date       datum;
    @ManyToOne
    @JoinColumn(name="quote_id")
    private Quote quote;
    
    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
    
    public float getQuote1() {
        return quote1;
    }
    
    public void setQuote1(float quote1) {
        this.quote1 = quote1;
    }
    
    public float getQuoteX() {
        return quoteX;
    }
    
    public void setQuoteX(float quoteX) {
        this.quoteX = quoteX;
    }
    
    public float getQuote2() {
        return quote2;
    }
    
    public void setQuote2(float quote2) {
        this.quote2 = quote2;
    }
    
    public Date getDatum() {
        return datum;
    }
    
    public void setDatum(Date datum) {
        this.datum = datum;
    }
    
    public Quote getQuote() {
        return quote;
    }
    
    public void setQuote(Quote quote) {
        this.quote = quote;
    }
    
 

}
