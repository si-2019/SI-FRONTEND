import React, {Component} from 'react';

class Komentar extends Component {
    render() {
        const {idComment,idUser, idTheme,text,timeCreated}=this.props.komentar;
         return (
                <div className='shadow-sm p-3 mb-5 bg-light rounded'>
                    <p>{text}</p>
                </div> 
            );       
        }
    }   

class Komentari extends Component {
    render(){
        console.log(this.props.komentari);
        return(
          this.props.komentari.map(KOMENTAR => {
            return(
            <div>
              <Komentar key={KOMENTAR.idComment} komentar={KOMENTAR}/>
            </div>
            );
          })
        );
      }
}
 
export default Komentari;


