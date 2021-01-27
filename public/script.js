document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialDate: '2021-01-01',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      select: function(arg) {
        var title = prompt('Event Title:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
        }
        calendar.unselect()
      },
      eventClick: function(arg) {
        if (confirm('Are you sure you want to delete this event?')) {
          arg.event.remove()
        }
      },
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
          title: 'Dinner with Nacho Libre',
          start: '2021-01-27',
        },
        {
          title: '30 Minute HIIT',
          start: '2021-01-13T12:00:00',
        },        
        {
          title: '60 minute Spin',
          start: '2021-01-07',
        },
        {
          groupId: 999,
          title: '60 Minute Yoga',
          start: '2021-02-09T16:00:00',
        },
        {
          groupId: 999,
          title: '60 Minute Yoga',
          start: '2021-02-23T16:00:00',
        },
        {
          groupId: 999,
          title: '60 Minute Yoga',
          start: '2021-02-16T16:00:00',
        },
        {
          title: '60 Minute Pilates',
          start: '2021-01-16T10:30:00',
        },
        {
          title: 'Make Me A Drink',
          start: '2021-02-12T17:00:00'
        },
        {
          title: '30 Minute Combat',
          start: '2021-02-25T17:00:00'
        },
        {
          title: 'Nacho Tuesday',
          start: '2020-02-02T20:00:00'
        },
        {
          title: '60 Minute Barre',
          start: '2021-01-19T17:30:00'
        },
        {
          title: '30 Minute Circuit',
          start: '2021-02-20T12:30:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2021-01-28'
        }
      ]
    });

    calendar.render();
  });