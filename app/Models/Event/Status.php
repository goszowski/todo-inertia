<?php

namespace App\Models\Event;

use App\Traits\IsSmartEnum;

enum Status: int
{
    use IsSmartEnum;

    case QUEUED = 0;
    case APPROVED = 1;
    case REFUSED = 2;

    public function label(): string
    {
        return match ($this) {
            static::QUEUED => 'Queued',
            static::APPROVED => 'Approved',
            static::REFUSED => 'Refused',
        };
    }

    public function view(): string
    {
        return match ($this) {
            static::QUEUED => 'Queued',
            default => 'Default',
        };
    }

    public function color(): string
    {
        return match ($this) {
            static::QUEUED => 'warning',
            static::APPROVED => 'success',
            static::REFUSED => 'danger',
        };
    }

    public function withMeta()
    {
        return [
            'color' => $this->color(),
        ];
    }
}
