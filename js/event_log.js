function NewEvent(EventValue,MessageValue){
    const event = ((EventValue||"").toLowerCase() || undefined)
    const message = (MessageValue || "NOMSG")
    var PossibleEvents = ['apponline','appoffline','apperror','appload','appresize','applog']
    var PossibleEventsPriority = [false,false,true,false,false,true]
    const prefix = PossibleEvents.includes(event,0) ? '$PET@' : '$UET@' 
    function MicroLog(message,priority){if(priority){try {alert(message)}catch(e){console.log(message)}}else{try {console.log(message)}catch(e){alert(message)}}}
    function FindEvent(event,list){try{for (let i = 0; i < list.length; i++){if(event==list[i]){return i}else{return undefined}}}catch(e){}}
    if(PossibleEvents.includes(event,0)){
        const EventPosition = FindEvent(event,PossibleEvents);
        const EventPriority = PossibleEventsPriority[EventPosition];
        if(EventPriority){MicroLog(`${event}${prefix}-${message}`,true)
        } else {MicroLog(`${event}${prefix}-${message}`,false)}
    }else{
        MicroLog(`${event}${prefix}-${message}`,true)
    }
}
