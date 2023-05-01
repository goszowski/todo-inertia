<?php

namespace App\Listeners;

use App\Events\EventCreated;
use App\Models\Event\Status;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ProcessEvent implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Handle the event.
     */
    public function handle(EventCreated $event): void
    {
        sleep(5);

        if (mt_rand(0, 99) > 50) {
            $event->event->status = Status::APPROVED;
        } else {
            $event->event->status = Status::REFUSED;
        }

        $event->event->save();
    }
}
