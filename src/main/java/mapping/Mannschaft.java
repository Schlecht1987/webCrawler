package mapping;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity 
@Table(name="MANNSCHAFT" )
public class Mannschaft {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int        id;
    
    @Column(name="name")
    private String name;
    
    @Column(name="land")
    private String land;
    
    @OneToMany (mappedBy = "mannschaft_1")
    private Collection<Begegnung> begegnung_1 = new ArrayList<Begegnung>();
    
    @OneToMany (mappedBy = "mannschaft_2")
    private Collection<Begegnung> begegnung_2 = new ArrayList<Begegnung>();
    
    @OneToMany (mappedBy = "sieger")
    private Collection<Ergebnis> ergebnis = new ArrayList<Ergebnis>();
    
    public Mannschaft(){
        
    }
    
    public Mannschaft(String name, String land ){
        this.name = name;
        this.land = land;
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
    
    public String getLand() {
        return land;
    }
    
    public void setLand(String land) {
        land = land;
    }

    
    public Collection<Begegnung> getBegegnung_1() {
        return begegnung_1;
    }

    
    public void setBegegnung_1(Collection<Begegnung> begegnung_1) {
        this.begegnung_1 = begegnung_1;
    }

    
    public Collection<Begegnung> getBegegnung_2() {
        return begegnung_2;
    }

    
    public void setBegegnung_2(Collection<Begegnung> begegnung_2) {
        this.begegnung_2 = begegnung_2;
    }

    
    public Collection<Ergebnis> getErgebnis() {
        return ergebnis;
    }

    
    public void setErgebnis(Collection<Ergebnis> ergebnis) {
        this.ergebnis = ergebnis;
    }

    

}
