import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (<div id='cards'>{
      characters.map((ele, index) =>
         <Card
            name={ele.name}
            species={ele.species}
            gender={ele.gender}
            image={ele.image}
            key={index}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />)
   }</div>)
      ;
}
