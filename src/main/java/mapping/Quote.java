package mapping;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "QUOTE")
public class Quote {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int   id;
    private float quoteM1;
    private float quoteX;
    private float quoteM2;
    
    @ManyToOne
    @JoinColumn(name="begegnung_id")
    private Begegnung begegnung;
    
    @ManyToOne
    @JoinColumn(name="wettanbieter_id")
    private Wettanbieter wettanbieter;
    
    @OneToMany (mappedBy = "quote")
    private Collection<HistoryQuote> historyQuoten = new ArrayList<HistoryQuote>();
    
    public int getId() {
        return id;
    }

    
    public void setId(int id) {
        this.id = id;
    }

    
    public float getQuoteM1() {
        return quoteM1;
    }

    
    public void setQuoteM1(float quoteM1) {
        this.quoteM1 = quoteM1;
    }

    
    public float getQuoteX() {
        return quoteX;
    }

    
    public void setQuoteX(float quoteX) {
        this.quoteX = quoteX;
    }

    
    public float getQuoteM2() {
        return quoteM2;
    }

    
    public void setQuoteM2(float quoteM2) {
        this.quoteM2 = quoteM2;
    }

    
    public Begegnung getBegegnung() {
        return begegnung;
    }

    
    public void setBegegnung(Begegnung begegnung) {
        this.begegnung = begegnung;
    }

    
    public Wettanbieter getWettanbieter() {
        return wettanbieter;
    }

    
    public void setWettanbieter(Wettanbieter wettanbieter) {
        this.wettanbieter = wettanbieter;
    }


    
    public Collection<HistoryQuote> getHistoryQuoten() {
        return historyQuoten;
    }


    
    public void setHistoryQuoten(Collection<HistoryQuote> historyQuoten) {
        this.historyQuoten = historyQuoten;
    }
}
