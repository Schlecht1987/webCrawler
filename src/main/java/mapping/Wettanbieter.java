package mapping;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "WETTANBIETER")
public class Wettanbieter {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    @OneToMany (mappedBy = "wettanbieter")
    private Collection<Quote> quote = new ArrayList<Quote>();
    
    public Wettanbieter(String name){
        this.name = name;
    }
    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public Collection<Quote> getQuote() {
        return quote;
    }
    
    public void setQuote(Collection<Quote> quote) {
        this.quote = quote;
    }
}
