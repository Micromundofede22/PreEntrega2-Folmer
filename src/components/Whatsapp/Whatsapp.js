import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = ({img}) => {

    return (
        <FloatingWhatsApp
            phoneNumber='+5493434159473'
            accountName='Micromund🐞'
            allowEsc
            allowClickAway
            notification
            notificationSound
            avatar={img}
            statusMessage='Contestamos en 1 hora aprox'
            chatMessage="Hola! Que lindo tener un nuevo Micromundista  por acá. ¿En qué puedo ayudarte?"
            
         />
    )
}

export default Whatsapp