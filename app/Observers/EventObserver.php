<?php

namespace App\Observers;

use App\Events\EventCreated;
use App\Events\EventStatusChanged;
use App\Models\Event;

class EventObserver
{
    public function created(Event $event)
    {
        EventCreated::dispatch($event);
    }

    public function updated(Event $event)
    {
        if ($event->status != $event->getOriginal('status')) {
            EventStatusChanged::dispatch($event);
        }
    }
}
