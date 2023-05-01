<?php

namespace App\Traits;

trait IsSmartEnum
{
    public static function getFromValue(int $value)
    {
        foreach (self::cases() as $enum) {
            if ($enum->value == $value) {
                return $enum;
            }
        }

        return null;
    }

    public static function options(): array
    {
        return array_map(fn($enum) => $enum->toArray(), self::cases());
    }

    public static function names(): array
    {
        return array_map(fn($enum) => $enum->name, self::cases());
    }

    public static function values(): array
    {
        return array_map(fn($enum) => $enum->value, self::cases());
    }

    public static function map(): array
    {
        $array = [];

        foreach (self::cases() as $enum) {
            $array[$enum->value] = $enum->label();
        }

        return $array;
    }

    public static function mapReverse(): array
    {
        $array = [];

        foreach (self::cases() as $enum) {
            $array[$enum->label()] = $enum->value;
        }

        return $array;
    }

    public static function array(): array
    {
        $array = [];

        foreach (self::cases() as $enum) {
            $array[] = $enum->toArray();
        }

        return $array;
    }

    public static function labelFor(self $value): string
    {
        $lang_key = sprintf(
            'app::%s.%s.%s',
            'enums',
            static::class,
            $value->value
        );

        return app('translator')->has($lang_key) ? __($lang_key) : $value->name;
    }

    public static function getValueFromName(string $name)
    {
        foreach (self::cases() as $enum) {
            if ($enum->name == $name) {
                return $enum->value;
            }
        }

        return null;
    }

    public static function getFromName(string $name)
    {
        foreach (self::cases() as $enum) {
            if ($enum->name == $name) {
                return $enum;
            }
        }

        return null;
    }

    public function label(): string
    {
        return static::labelFor($this);
    }

    public function withMeta(): array
    {
        return [];
    }

    public function toArray(): array
    {
        return [
            'name'  => $this->name,
            'value' => $this->value,
            'label' => $this->label(),
            'meta'  => $this->withMeta(),
        ];
    }

    public function toJson($options = 0): array
    {
        return $this->toArray();
    }

    public function isA($value): bool
    {
        return $this == $value;
    }

    public function isAn(string $value): bool
    {
        return $this->isA($value);
    }

    public function isNot(string $value): bool
    {
        return !$this->isA($value);
    }

    public function isAny(array $values): bool
    {
        return in_array($this, $values);
    }

    public function isNotAny(array $values): bool
    {
        return !$this->isAny($values);
    }
}
