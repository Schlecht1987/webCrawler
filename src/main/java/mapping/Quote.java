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

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

// TODO: Auto-generated Javadoc
/**
 * The Class Quote.
 */
@Entity
@Table(name = "QUOTE")
public class Quote {
    
    /** The id. */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int   id;
    
    /** The quote m1. */
    @JoinColumn(nullable = false)
    private float quoteM1;
    
    /** The quote x. */
    @JoinColumn(nullable = false)
    private float quoteX;
    
    /** The quote m2. */
    @JoinColumn(nullable = false)
    private float quoteM2;
    
    /** The begegnung. */
    @ManyToOne
    @JoinColumn(name="begegnung_id", nullable = false)
    private Begegnung begegnung;
    
    /** The wettanbieter. */
    @ManyToOne
    @JoinColumn(name="wettanbieter_id", nullable = false)
    private Wettanbieter wettanbieter;
    
    /** The history quoten. */
    @OneToMany (mappedBy = "quote")
    @Cascade({CascadeType.SAVE_UPDATE})
    private Collection<HistoryQuote> historyQuoten = new ArrayList<HistoryQuote>();
    
    /**
     * Gets the id.
     *
     * @return the id
     */
    public int getId() {
        return id;
    }

    
    /**
     * Sets the id.
     *
     * @param id the new id
     */
    public void setId(int id) {
        this.id = id;
    }

    
    /**
     * Gets the quote m1.
     *
     * @return the quote m1
     */
    public float getQuoteM1() {
        return quoteM1;
    }

    
    /**
     * Sets the quote m1.
     *
     * @param quoteM1 the new quote m1
     */
    public void setQuoteM1(float quoteM1) {
        this.quoteM1 = quoteM1;
    }

    
    /**
     * Gets the quote x.
     *
     * @return the quote x
     */
    public float getQuoteX() {
        return quoteX;
    }

    
    /**
     * Sets the quote x.
     *
     * @param quoteX the new quote x
     */
    public void setQuoteX(float quoteX) {
        this.quoteX = quoteX;
    }

    
    /**
     * Gets the quote m2.
     *
     * @return the quote m2
     */
    public float getQuoteM2() {
        return quoteM2;
    }

    
    /**
     * Sets the quote m2.
     *
     * @param quoteM2 the new quote m2
     */
    public void setQuoteM2(float quoteM2) {
        this.quoteM2 = quoteM2;
    }

    
    /**
     * Gets the begegnung.
     *
     * @return the begegnung
     */
    public Begegnung getBegegnung() {
        return begegnung;
    }

    
    /**
     * Sets the begegnung.
     *
     * @param begegnung the new begegnung
     */
    public void setBegegnung(Begegnung begegnung) {
        this.begegnung = begegnung;
    }

    
    /**
     * Gets the wettanbieter.
     *
     * @return the wettanbieter
     */
    public Wettanbieter getWettanbieter() {
        return wettanbieter;
    }

    
    /**
     * Sets the wettanbieter.
     *
     * @param wettanbieter the new wettanbieter
     */
    public void setWettanbieter(Wettanbieter wettanbieter) {
        this.wettanbieter = wettanbieter;
    }


    
    /**
     * Gets the history quoten.
     *
     * @return the history quoten
     */
    public Collection<HistoryQuote> getHistoryQuoten() {
        return historyQuoten;
    }


    
    /**
     * Sets the history quoten.
     *
     * @param historyQuoten the new history quoten
     */
    public void setHistoryQuoten(Collection<HistoryQuote> historyQuoten) {
        this.historyQuoten = historyQuoten;
    }
}
