let myTodos = {
    day : 'Monday',
    meetings: 0,
    meetDone: 0,
    
    addMeeting: function(num){
        this.meetings = this.meetings + num // this refers in scope of block(in the object)
    },

    meetingDone: function(num){
        this.meetDone = this.meetDone + num
    },

    summary: function(){
        //return `you have ${this.meetings} meetings today!` // if you just call meetings ,
                                                            // then it gives error that meetings is not defined so use this for reference because we calling it in a funnction
        meetleft = this.meetings - this.meetDone
        return `you have ${meetleft} meetings today!`                                                    
    },

    
    resetMeetings: function(){
        this.meetings = 0
        this.meetDone = 0
    }
}

myTodos.addMeeting(4)
myTodos.meetingDone(2)
myTodos.resetMeetings()
console.log(myTodos.summary())

//Assignment
//Handle MeetDone
//create a fun reset
//make changes in summary