'use client'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { ArrowLeft, Loader2, Upload, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
// import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useToast } from '@/hooks/use-toast'
import { CropInputs } from '../components/crop-inputs'
import { BankDetails } from '../components/bank-details'
import { PhotoUpload } from '../components/photo-upload'
import { Toaster } from '@/components/ui/toaster'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().regex(/^[6-9]\d{9}$/, {
    message: "Please enter a valid Indian phone number.",
  }),
  email: z.string().email().optional(),
  state: z.string().min(1, {
    message: "Please select a state.",
  }),
  district: z.string().min(1, {
    message: "Please select a district.",
  }),
  village: z.string().min(1, {
    message: "Please select a village.",
  }),
  languages: z.array(z.string()).min(1, {
    message: "Please select at least one language.",
  }),
  farmSize: z.number().min(0.01, {
    message: "Farm size must be greater than 0.01",
  }),
  farmingType: z.enum(["conventional", "organic", "other"]),
  irrigationMethods: z.array(z.string()).min(1, {
    message: "Please select at least one irrigation method.",
  }),
  certifications: z.array(z.string()),
  paymentTerms: z.array(z.string()).min(1, {
    message: "Please select at least one payment term.",
  }),
  visibility: z.object({
    contactDetails: z.boolean(),
    farmPhotos: z.boolean(),
  }),
  notifications: z.object({
    sms: z.boolean(),
    email: z.boolean(),
    app: z.boolean(),
  }),
})

export default function EditProfilePage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const {toast} = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "John P. Smith",
      phone: "9876543210",
      email: "john.smith@example.com",
      state: "maharashtra",
      district: "pune",
      village: "example-village",
      languages: ["english", "hindi"],
      farmSize: 50,
      farmingType: "organic",
      irrigationMethods: ["drip", "rainfed"],
      certifications: ["organic", "globalgap"],
      paymentTerms: ["advance", "partial"],
      visibility: {
        contactDetails: true,
        farmPhotos: true,
      },
      notifications: {
        sms: true,
        email: true,
        app: true,
      },
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      // api
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log(data)
      toast({
        title: "Profile updated successfully",
        description: "Your changes have been saved.",
      })
      navigate ('/farmer/profile');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Profile
        </Button>
        <h1 className="text-2xl font-bold">Edit Profile</h1>
        <div className="w-[100px]" /> {/* Spacer for alignment */}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Accordion type="single" collapsible defaultValue="personal">
            <AccordionItem value="personal">
              <AccordionTrigger>Personal Information</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm">
                        <Upload className="mr-2 h-4 w-4" />
                        Change Picture
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        <X className="mr-2 h-4 w-4" />
                        Remove Picture
                      </Button>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input {...field} type="tel" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address (Optional)</FormLabel>
                          <FormControl>
                            <Input {...field} type="email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="maharashtra">Maharashtra</SelectItem>
                              <SelectItem value="karnataka">Karnataka</SelectItem>
                              <SelectItem value="gujarat">Gujarat</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="district"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>District</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select district" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="pune">Pune</SelectItem>
                              <SelectItem value="nashik">Nashik</SelectItem>
                              <SelectItem value="nagpur">Nagpur</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="village"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Village</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select village" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="example-village">Example Village</SelectItem>
                              <SelectItem value="another-village">Another Village</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="farming">
              <AccordionTrigger>Farming Details</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-6">
                  <FormField
                    control={form.control}
                    name="farmSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Farm Size (in Acres)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.1"
                            {...field}
                            onChange={e => field.onChange(parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="farmingType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Farming Type</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="conventional" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Conventional
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="organic" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Organic
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="other" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Other
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="irrigationMethods"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base">Irrigation Methods</FormLabel>
                          <FormDescription>
                            Select all that apply to your farm.
                          </FormDescription>
                        </div>
                        <div className="grid gap-2">
                          <FormField
                            control={form.control}
                            name="irrigationMethods"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes('drip')}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, 'drip'])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== 'drip'
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Drip Irrigation
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="irrigationMethods"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes('rainfed')}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, 'rainfed'])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== 'rainfed'
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Rain-fed
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="crops">
              <AccordionTrigger>Crop Portfolio</AccordionTrigger>
              <AccordionContent>
                <CropInputs />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payment">
              <AccordionTrigger>Payment Preferences</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="paymentTerms"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base">Payment Terms</FormLabel>
                          <FormDescription>
                            Select your preferred payment terms.
                          </FormDescription>
                        </div>
                        <div className="grid gap-2">
                          {["advance", "partial", "post-delivery"].map((term) => (
                            <FormField
                              key={term}
                              control={form.control}
                              name="paymentTerms"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(term)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, term])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== term
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal capitalize">
                                    {term.replace("-", " ")}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <BankDetails />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="photos">
              <AccordionTrigger>Farm Photos</AccordionTrigger>
              <AccordionContent>
                <PhotoUpload />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="preferences">
              <AccordionTrigger>Visibility & Notifications</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="visibility"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base">Visibility Settings</FormLabel>
                          <FormDescription>
                            Control what information is visible to other users.
                          </FormDescription>
                        </div>
                        <div className="grid gap-2">
                          <FormField
                            control={form.control}
                            name="visibility.contactDetails"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Show contact details publicly
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="visibility.farmPhotos"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Show farm photos publicly
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="notifications"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base">Notification Preferences</FormLabel>
                          <FormDescription>
                            Choose how you want to receive updates.
                          </FormDescription>
                        </div>
                        <div className="grid gap-2">
                          <FormField
                            control={form.control}
                            name="notifications.sms"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  SMS notifications
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="notifications.email"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Email notifications
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="notifications.app"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  In-app notifications
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() =>navigate(-1)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
      <Toaster />
    </div>
  )
}

