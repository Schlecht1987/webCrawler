package mapping;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

// TODO: Auto-generated Javadoc
/**
 * The Class Ergebnis.
 */
@Entity
@Table (name="ERGEBNIS")
public class Ergebnis {
    
    /** The id. */
    @Id @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    
    /** The m_1_tore. */
    private int m_1_tore;
    
    /** The m_2_tore. */
    private int m_2_tore;
    

    /** The sieger. */
    private String sieger;
    
    /** The begegnung. */
    @OneToOne
    @JoinColumn(name="begegnung_id")
    private Begegnung begegnung;
    
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
     * Gets the m_1_tore.
     *
     * @return the m_1_tore
     */
    public int getM_1_tore() {
        return m_1_tore;
    }
    
    /**
     * Sets the m_1_tore.
     *
     * @param m_1_tore the new m_1_tore
     */
    public void setM_1_tore(int m_1_tore) {
        this.m_1_tore = m_1_tore;
    }
    
    /**
     * Gets the m_2_tore.
     *
     * @return the m_2_tore
     */
    public int getM_2_tore() {
        return m_2_tore;
    }
    
    /**
     * Sets the m_2_tore.
     *
     * @param m_2_tore the new m_2_tore
     */
    public void setM_2_tore(int m_2_tore) {
        this.m_2_tore = m_2_tore;
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
     * Gets the sieger.
     *
     * @return the sieger
     */
    public String getSieger() {
        return sieger;
    }

    
    /**
     * Sets the sieger.
     *
     * @param sieger the new sieger
     */
    public void setSieger(String sieger) {
        this.sieger = sieger;
    }


    


}
