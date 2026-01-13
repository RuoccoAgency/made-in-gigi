import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { Calendar as CalendarIcon, Loader2, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Inserisci un'email valida"),
  phone: z.string().min(8, "Inserisci un numero di telefono valido"),
  eventType: z.string({
    required_error: "Seleziona il tipo di evento",
  }),
  date: z.date({
    required_error: "Seleziona una data",
  }),
  location: z.string().min(3, "Inserisci città o provincia"),
  services: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Seleziona almeno un servizio",
  }),
  timeSlot: z.string({
    required_error: "Seleziona una fascia oraria",
  }),
  budget: z.string().optional(),
  message: z.string().optional(),
  privacy: z.boolean().default(false).refine((val) => val === true, {
    message: "Devi accettare l'informativa sulla privacy",
  }),
});

const serviceOptions = [
  { id: "gonfiabili", label: "Gonfiabili" },
  { id: "spettacoli", label: "Spettacoli" },
  { id: "allestimenti", label: "Allestimenti" },
];

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      privacy: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Richiesta inviata con successo!",
        description: "Ti ricontatteremo il prima possibile per confermare i dettagli.",
        duration: 5000,
      });
      form.reset();
    }, 1500);
  }

  return (
    <section id="preventivo" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Richiedi un Preventivo</h2>
            <p className="text-muted-foreground text-lg">
              Compila il modulo per ricevere un'offerta personalizzata senza impegno.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl">
                <CardContent className="p-6 md:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome e Cognome</FormLabel>
                              <FormControl>
                                <Input placeholder="Mario Rossi" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefono</FormLabel>
                              <FormControl>
                                <Input placeholder="333 1234567" type="tel" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="mario@email.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Città / Provincia Evento</FormLabel>
                              <FormControl>
                                <Input placeholder="Napoli" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="eventType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tipo Evento</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Seleziona..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="compleanno">Compleanno</SelectItem>
                                  <SelectItem value="comunione">Comunione / Battesimo</SelectItem>
                                  <SelectItem value="matrimonio">Matrimonio</SelectItem>
                                  <SelectItem value="aziendale">Evento Aziendale</SelectItem>
                                  <SelectItem value="altro">Altro</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Data Evento</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP", { locale: it })
                                      ) : (
                                        <span>Seleziona una data</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) =>
                                      date < new Date()
                                    }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="timeSlot"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Fascia Oraria</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Seleziona..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="mattina">Mattina</SelectItem>
                                  <SelectItem value="pomeriggio">Pomeriggio</SelectItem>
                                  <SelectItem value="sera">Sera</SelectItem>
                                  <SelectItem value="giornata">Intera Giornata</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget Indicativo (Opzionale)</FormLabel>
                              <FormControl>
                                <Input placeholder="Es. 500€" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="services"
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel className="text-base">Servizi Interessati</FormLabel>
                              <FormDescription>
                                Seleziona uno o più servizi.
                              </FormDescription>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {serviceOptions.map((item) => (
                                <FormField
                                  key={item.id}
                                  control={form.control}
                                  name="services"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={item.id}
                                        className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(item.id)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, item.id])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== item.id
                                                    )
                                                  )
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal cursor-pointer w-full">
                                          {item.label}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Messaggio / Richieste Particolari</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Raccontaci di più sul tuo evento..."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="privacy"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-muted/50">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Accetto il trattamento dei dati personali
                              </FormLabel>
                              <FormDescription>
                                I tuoi dati saranno utilizzati solo per rispondere a questa richiesta.
                              </FormDescription>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full h-12 text-lg font-bold bg-secondary hover:bg-secondary/90 text-white" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Invio in corso...
                          </>
                        ) : (
                          "Invia Richiesta"
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                 <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                 
                 <h3 className="text-2xl font-bold mb-4">Hai fretta?</h3>
                 <p className="mb-6 opacity-90">
                   Chiamaci direttamente per verificare la disponibilità in tempo reale.
                 </p>
                 
                 <div className="space-y-4 relative z-10">
                   <Button asChild className="w-full bg-white text-primary hover:bg-white/90 h-12 text-lg font-bold">
                     <a href="tel:3505081212">
                       <Phone className="mr-2 w-5 h-5" />
                       350 508 1212
                     </a>
                   </Button>
                   <Button asChild variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 h-12 text-lg">
                     <a href="tel:3505081212">
                       <Phone className="mr-2 w-5 h-5" />
                       350 508 1212
                     </a>
                   </Button>
                 </div>
              </div>

              <Card className="bg-white p-6 shadow-md border-slate-100">
                <h4 className="font-bold text-lg mb-2">Orari Ufficio</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Lunedì - Sabato</span>
                    <span className="font-medium text-foreground">10:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domenica</span>
                    <span className="font-medium text-foreground">Chiuso</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
