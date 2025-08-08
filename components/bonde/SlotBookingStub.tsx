
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import type { Reception } from '@/data/bonde';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

interface SlotBookingStubProps {
    receptions: Reception[];
}

const availableTimeSlots = ['08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '13:00 - 14:00', '14:00 - 15:00'];

export function SlotBookingStub({ receptions }: SlotBookingStubProps) {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectedSlot, setSelectedSlot] = useState<string | undefined>();
    const [selectedReception, setSelectedReception] = useState<string | undefined>();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Velg tid og sted for levering</CardTitle>
                <CardDescription>
                    Bestilling av tid er obligatorisk for å sikre effektiv logistikk og minst mulig ventetid for deg.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="reception-select-booking">1. Velg mottak</Label>
                        <Select value={selectedReception} onValueChange={setSelectedReception}>
                            <SelectTrigger id="reception-select-booking">
                                <SelectValue placeholder="Velg kornmottak..." />
                            </SelectTrigger>
                            <SelectContent>
                                {receptions.map((reception) => (
                                    <SelectItem key={reception.id} value={reception.id}>
                                        {reception.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>2. Velg dato</Label>
                        <div className="rounded-md border">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="p-0"
                                disabled={(day) => day < new Date() || day.getDay() === 0 || day.getDay() === 6}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <Label>3. Velg ledig tidspunkt</Label>
                         <RadioGroup
                            value={selectedSlot}
                            onValueChange={setSelectedSlot}
                            className="mt-2 grid grid-cols-2 gap-2"
                            aria-label="Tilgjengelige tidspunkter"
                        >
                            {availableTimeSlots.map((slot) => (
                                <div key={slot}>
                                    <RadioGroupItem value={slot} id={`slot-${slot}`} className="peer sr-only" />
                                    <Label
                                        htmlFor={`slot-${slot}`}
                                        className="flex items-center justify-center gap-2 rounded-md border-2 border-muted bg-popover p-3 text-sm hover:bg-accent/80 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                        <Clock className="h-4 w-4" /> {slot}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>

                    <Button className="w-full" size="lg" disabled={!selectedReception || !date || !selectedSlot}>
                        Bekreft og bestill tid
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

