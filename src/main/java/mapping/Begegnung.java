package mapping;



import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;




@Entity
@Table(name="BEGEGNUNG" )
public class Begegnung {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int        id;

    @Temporal(TemporalType.DATE)
    private Date       datum;
    
    @ManyToOne
    private Spieltyp spieltyp ;
    
    @ManyToOne 
    @JoinColumn(name="mannschaft_1")
    private Mannschaft mannschaft_1;
    
    @ManyToOne
    @JoinColumn(name="mannschaft_2")
    private Mannschaft mannschaft_2;
    
    @OneToMany (mappedBy = "begegnung")
    private Collection<Quote> quote = new ArrayList<Quote>();

    
    public int getId() {
        return id;
    }

    
    public void setId(int id) {
        this.id = id;
    }

    
    public Date getDatum() {
        return datum;
    }

    
    public void setDatum(Date datum) {
        this.datum = datum;
    }

    
    public Spieltyp getSpieltyp() {
        return spieltyp;
    }

    
    public void setSpieltyp(Spieltyp spieltyp) {
        this.spieltyp = spieltyp;
    }


    
    public Mannschaft getMannschaft_1() {
        return mannschaft_1;
    }


    
    public void setMannschaft_1(Mannschaft mannschaft_1) {
        this.mannschaft_1 = mannschaft_1;
    }


    
    public Mannschaft getMannschaft_2() {
        return mannschaft_2;
    }


    
    public void setMannschaft_2(Mannschaft mannschaft_2) {
        this.mannschaft_2 = mannschaft_2;
    }


    
    public Collection<Quote> getQuote() {
        return quote;
    }


    
    public void setQuote(Collection<Quote> quote) {
        this.quote = quote;
    }


}
