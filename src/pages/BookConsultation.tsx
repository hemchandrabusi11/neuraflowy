import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Check } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const BookConsultation = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    time: "",
    duration: "30",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "AI Automation Workflows",
    "CRM & Lead Systems",
    "AI Chatbots (Web + WhatsApp)",
    "Website & App Development",
    "Google & Meta Ads",
    "Attendance Automation",
    "Analytics Dashboards",
    "Business Integrations",
    "Other",
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  ];

  const durations = [
    { value: "30", label: "30 minutes" },
    { value: "60", label: "1 hour" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !formData.time) {
      toast.error("Please select a date and time");
      return;
    }

    // Here you would integrate with your webhook
    const bookingData = {
      ...formData,
      date: format(date, "yyyy-MM-dd"),
      timestamp: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    console.log("Booking submitted:", bookingData);

    toast.success("Consultation booked successfully!");
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center bg-gradient-neural-subtle py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-neural flex items-center justify-center mx-auto mb-6 shadow-neural">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-4 text-foreground">
                Consultation Booked!
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for booking a consultation with NeuraFlow. We've sent a confirmation email with the meeting details.
              </p>
              <div className="bg-secondary rounded-lg p-6 mb-8 text-left">
                <h3 className="font-semibold mb-4 text-foreground">Booking Details:</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-medium text-foreground">Date:</span> {date && format(date, "MMMM dd, yyyy")}</p>
                  <p><span className="font-medium text-foreground">Time:</span> {formData.time}</p>
                  <p><span className="font-medium text-foreground">Duration:</span> {formData.duration} minutes</p>
                  <p><span className="font-medium text-foreground">Service:</span> {formData.service}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setIsSubmitted(false)}>
                  Book Another Consultation
                </Button>
                <Button variant="outline" asChild>
                  <a href="/" className="text-center">Return to Home</a>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-neural-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Book a Free Consultation
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Schedule a call with our automation experts to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Your Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Phone *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Service Interested In *
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Select Date & Time
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Date *
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Time *
                      </label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) =>
                          setFormData({ ...formData, time: value })
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Duration *
                      </label>
                      <Select
                        value={formData.duration}
                        onValueChange={(value) =>
                          setFormData({ ...formData, duration: value })
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {durations.map((duration) => (
                            <SelectItem key={duration.value} value={duration.value}>
                              {duration.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Additional Notes (Optional)
                  </label>
                  <Textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about your project or any specific questions..."
                    rows={4}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-neural shadow-neural"
                >
                  Confirm Booking
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookConsultation;
