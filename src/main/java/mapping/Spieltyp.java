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
@Table(name="SPIELTYP")
public class Spieltyp {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int        id;
    
    @Column(name="name")
    private String name;
    
    @OneToMany (mappedBy = "spieltyp")
    private Collection<Begegnung> begegnung = new ArrayList<Begegnung>();

    public Spieltyp(){
        
    }
    public Spieltyp(String name){
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

    
    public Collection<Begegnung> getBegegnung() {
        return begegnung;
    }

    
    public void setBegegnung(Collection<Begegnung> begegnung) {
        this.begegnung = begegnung;
    }
    


}
