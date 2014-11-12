package mapping;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table (name="ERGEBNIS")
public class Ergebnis {
    @Id @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    
    private int m_1_tore;
    
    private int m_2_tore;
    
    @ManyToOne 
    @JoinColumn(name="sieger")
    private Mannschaft sieger;
    
    @OneToOne
    @JoinColumn(name="begegnung_id")
    private Begegnung begegnung;
    
    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
    
    public int getM_1_tore() {
        return m_1_tore;
    }
    
    public void setM_1_tore(int m_1_tore) {
        this.m_1_tore = m_1_tore;
    }
    
    public int getM_2_tore() {
        return m_2_tore;
    }
    
    public void setM_2_tore(int m_2_tore) {
        this.m_2_tore = m_2_tore;
    }
    

    
    public Begegnung getBegegnung() {
        return begegnung;
    }
    
    public void setBegegnung(Begegnung begegnung) {
        this.begegnung = begegnung;
    }

    
    public Mannschaft getSieger() {
        return sieger;
    }

    
    public void setSieger(Mannschaft sieger) {
        this.sieger = sieger;
    }
    


}
