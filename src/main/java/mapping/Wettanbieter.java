package mapping;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

// TODO: Auto-generated Javadoc
/**
 * The Class Wettanbieter.
 */
@Entity
@Table(name = "WETTANBIETER")
public class Wettanbieter {
    
    /** The id. */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    
    /** The name. */
    @Column(nullable = false)
    private String name;
    
    /** The quote. */
    @Cascade({CascadeType.SAVE_UPDATE})
    @OneToMany (mappedBy = "wettanbieter")
    private Collection<Quote> quote = new ArrayList<Quote>();
    
    
    /**
     * Instantiates a new wettanbieter.
     */
    public Wettanbieter(){
        
    }
    /**
     * Instantiates a new wettanbieter.
     *
     * @param name the name
     */
    public Wettanbieter(String name){
        this.name = name;
    }
    
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
     * Gets the name.
     *
     * @return the name
     */
    public String getName() {
        return name;
    }
    
    /**
     * Sets the name.
     *
     * @param name the new name
     */
    public void setName(String name) {
        this.name = name;
    }
    
    /**
     * Gets the quote.
     *
     * @return the quote
     */
    public Collection<Quote> getQuote() {
        return quote;
    }
    
    /**
     * Sets the quote.
     *
     * @param quote the new quote
     */
    public void setQuote(Collection<Quote> quote) {
        this.quote = quote;
    }
}
