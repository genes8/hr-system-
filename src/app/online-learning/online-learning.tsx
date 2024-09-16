"use client";

import { useState } from 'react'
import { Book, Video, PenTool, Users, Award, TrendingUp, Search, Filter, ChevronDown, Play, Pause, RotateCcw, Star, MessageSquare, Share2, Calendar, FileText, Shield, Smartphone, Monitor, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function OnlineLearning() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const courses = [
    { id: 1, title: "Osnove upravljanja elektroenergetskim sistemima", category: "Tehničke veštine", format: "Video", duration: "2h 30min", progress: 75, instructor: "Ana Jovanović", rating: 4.8 },
    { id: 2, title: "Napredna analiza podataka u energetici", category: "Analitičke veštine", format: "Interaktivni", duration: "3h 15min", progress: 30, instructor: "Marko Nikolić", rating: 4.9 },
    { id: 3, title: "Energetska efikasnost u industriji", category: "Tehničke veštine", format: "Video", duration: "1h 45min", progress: 100, instructor: "Jovana Petrović", rating: 4.7 },
    { id: 4, title: "Zaštita na radu u elektroenergetici", category: "Bezbednost", format: "Tekst", duration: "1h", progress: 50, instructor: "Nikola Đorđević", rating: 4.6 },
    { id: 5, title: "Upravljanje projektima u energetskom sektoru", category: "Upravljanje", format: "Interaktivni", duration: "4h", progress: 0, instructor: "Milica Stojanović", rating: 4.9 },
  ]

  const learningPlan = [
    { id: 1, title: "Napredna analiza podataka u energetici", deadline: "15. jul 2023", priority: "Visok" },
    { id: 2, title: "Zaštita na radu u elektroenergetici", deadline: "1. avgust 2023", priority: "Srednji" },
    { id: 3, title: "Upravljanje projektima u energetskom sektoru", deadline: "30. septembar 2023", priority: "Nizak" },
  ]

  const achievements = [
    { id: 1, title: "Majstor energetske efikasnosti", description: "Završili ste sve kurseve iz oblasti energetske efikasnosti", icon: <Award className="h-8 w-8 text-yellow-500" /> },
    { id: 2, title: "Analitički guru", description: "Postigli ste izvanredne rezultate u kursu analize podataka", icon: <TrendingUp className="h-8 w-8 text-blue-500" /> },
    { id: 3, title: "Bezbednost na prvom mestu", description: "Uspešno ste primenili znanje iz zaštite na radu", icon: <Shield className="h-8 w-8 text-green-500" /> },
  ]

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'all' || course.category === selectedCategory)
  )

  const categories = ['all', ...Array.from(new Set(courses.map(course => course.category)))]

  const recommendedCourses = [
    { id: 6, title: "Obnovljivi izvori energije", category: "Tehničke veštine", format: "Video", duration: "2h", instructor: "Marija Simić", rating: 4.8 },
    { id: 7, title: "Liderstvo u energetskom sektoru", category: "Upravljanje", format: "Interaktivni", duration: "3h 30min", instructor: "Petar Petrović", rating: 4.9 },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold">Online Učenje</h1>
      </div>
      
      <div className="flex-grow p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <TrendingUp className="mr-2 h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="courses" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Book className="mr-2 h-4 w-4" />
              Katalog kurseva
            </TabsTrigger>
            <TabsTrigger value="learning-plan" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <PenTool className="mr-2 h-4 w-4" />
              Plan učenja
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Award className="mr-2 h-4 w-4" />
              Dostignuća
            </TabsTrigger>
            <TabsTrigger value="social" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Users className="mr-2 h-4 w-4" />
              Socijalno učenje
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>Pregled vašeg napretka i aktivnosti</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Ukupan napredak</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">68%</div>
                      <Progress value={68} className="mt-2" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Završeni kursevi</CardTitle>
                      <Book className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3/5</div>
                      <p className="text-xs text-muted-foreground">60% završeno</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Sledeći rok</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">15. jul</div>
                      <p className="text-xs text-muted-foreground">Napredna analiza podataka</p>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Nedavne aktivnosti</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Badge className="bg-green-500 text-white">Završeno</Badge>
                        <span>Energetska efikasnost u industriji</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Badge className="bg-blue-500 text-white">U toku</Badge>
                        <span>Napredna analiza podataka u energetici</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Badge className="bg-yellow-500 text-white">Započeto</Badge>
                        <span>Zaštita na radu u elektroenergetici</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Preporučeni kursevi</CardTitle>
                    <CardDescription>Bazirano na vašem profilu i aktivnostima</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {recommendedCourses.map((course) => (
                        <Card key={course.id}>
                          <CardHeader>
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <CardDescription>{course.category}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <span>{course.format}</span>
                              <span>•</span>
                              <span>{course.duration}</span>
                              <span>•</span>
                              <span>{course.instructor}</span>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" size="sm">Započni kurs</Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Katalog kurseva</CardTitle>
                <CardDescription>Istražite našu bogatu biblioteku kurseva</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0 md:space-x-2">
                  <div className="relative w-full md:w-64">
                    <Input 
                      placeholder="Pretraži kurseve" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" />
                        Kategorija: {selectedCategory}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {categories.map((category) => (
                        <DropdownMenuItem key={category} onSelect={() => setSelectedCategory(category)}>
                          {category === 'all' ? 'Sve kategorije' : category}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCourses.map((course) => (
                    <Card key={course.id} className="flex flex-col">
                      <CardHeader>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex items-center space-x-2 mb-2">
                          {course.format === 'Video' && <Video className="h-4 w-4" />}
                          {course.format === 'Interaktivni' && <PenTool className="h-4 w-4" />}
                          {course.format === 'Tekst' && <FileText className="h-4 w-4" />}
                          <span>{course.format}</span>
                          <span>•</span>
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${course.instructor}`} />
                            <AvatarFallback>{course.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <span>{course.instructor}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{course.rating}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <Progress value={course.progress} className="w-1/2" />
                        <span className="text-sm text-gray-500">{course.progress}% završeno</span>
                        <Button variant="outline">
                          {course.progress === 0 ? 'Započni' : 'Nastavi'}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learning-plan">
            <Card>
              <CardHeader>
                <CardTitle>Personalizovani plan učenja</CardTitle>
                <CardDescription>Vaš prilagođeni plan za razvoj kompetencija</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Kurs</TableHead>
                      <TableHead>Rok</TableHead>
                      <TableHead>Prioritet</TableHead>
                      <TableHead>Akcije</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {learningPlan.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.deadline}</TableCell>
                        <TableCell>
                          <Badge 
                            className={
                              item.priority === 'Visok' 
                                ? 'bg-yellow-500 text-white' 
                                : item.priority === 'Srednji' 
                                  ? 'bg-orange-500 text-white' 
                                  : 'bg-blue-500 text-white'
                            }
                          >
                            {item.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">Započni</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Vaša dostignuća</CardTitle>
                <CardDescription>Pogledajte svoje bedževe i nagrade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {achievements.map((achievement) => (
                    <Card key={achievement.id}>
                      <CardHeader>
                        <div className="flex justify-center">
                          {achievement.icon}
                        </div>
                        <CardTitle className="text-center mt-2">{achievement.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-center text-sm text-gray-500">{achievement.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-center">
                        <Button variant="outline" size="sm">
                          <Share2 className="mr-2 h-4 w-4" />
                          Podeli
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social">
            <Card>
              <CardHeader>
                <CardTitle>Socijalno učenje</CardTitle>
                <CardDescription>Povežite se sa kolegama i učite zajedno</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Forumi za diskusiju</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center justify-between">
                          <span>Energetska efikasnost</span>
                          <Badge>32 nova posta</Badge>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Analiza podataka</span>
                          <Badge>18 novih postova</Badge>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Upravljanje projektima</span>
                          <Badge>5 novih postova</Badge>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Prikaži sve forume</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Grupe za učenje</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center justify-between">
                          <span>Napredna analiza podataka</span>
                          <Badge>12 članova</Badge>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Obnovljivi izvori energije</span>
                          <Badge>8 članova</Badge>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Liderstvo u energetici</span>
                          <Badge>15 članova</Badge>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Pridruži se grupi</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="fixed bottom-4 right-4 rounded-full p-4">
              <Smartphone className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Mobilno učenje</DialogTitle>
              <DialogDescription>
                Pristupite kursevima sa vašeg mobilnog uređaja
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center items-center space-x-4">
              <Button variant="outline">
                <Smartphone className="mr-2 h-4 w-4" />
                Preuzmi Android aplikaciju
              </Button>
              <Button variant="outline">
                <Smartphone className="mr-2 h-4 w-4" />
                Preuzmi iOS aplikaciju
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="fixed bottom-4 left-4 rounded-full p-4">
              <Monitor className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Virtuelne učionice</DialogTitle>
              <DialogDescription>
                Pridružite se live webinarima i virtuelnim sesijama obuke
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Uvod u smart grid tehnologije</h3>
                  <p className="text-sm text-gray-500">Sutra, 14:00 - 15:30</p>
                </div>
                <Button>Prijavi se</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Napredne tehnike analize podataka</h3>
                  <p className="text-sm text-gray-500">Petak, 10:00 - 12:00</p>
                </div>
                <Button>Prijavi se</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}