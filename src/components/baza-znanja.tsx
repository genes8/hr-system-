'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Search, Book, FileText, Users, BarChart, PlusCircle, ThumbsUp, MessageSquare, Clock, Tag } from 'lucide-react'

export function BazaZnanja() {
  const [activeTab, setActiveTab] = useState('pretraga')

  const categories = [
    { id: 1, name: "Elektrodistribucija", subcategories: ["Transformatori", "Dalekovodi", "Trafostanice"] },
    { id: 2, name: "Zaštita na radu", subcategories: ["Lična zaštitna oprema", "Rad na visini", "Električna bezbednost"] },
    { id: 3, name: "Obnovljivi izvori", subcategories: ["Solarna energija", "Vetroelektrane", "Biomasa"] },
    { id: 4, name: "Pametne mreže", subcategories: ["AMI sistemi", "SCADA", "Upravljanje opterećenjem"] },
  ]

  const recentDocuments = [
    { id: 1, title: "Uputstvo za održavanje transformatora", category: "Elektrodistribucija", author: "Marko Petrović", date: "2023-06-20", views: 156 },
    { id: 2, title: "Procedura za rad na visini", category: "Zaštita na radu", author: "Ana Jovanović", date: "2023-06-18", views: 89 },
    { id: 3, title: "Implementacija solarnih panela u distributivnu mrežu", category: "Obnovljivi izvori", author: "Nikola Đorđević", date: "2023-06-15", views: 210 },
    { id: 4, title: "Osnove SCADA sistema", category: "Pametne mreže", author: "Jelena Nikolić", date: "2023-06-12", views: 178 },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
        <h1 className="text-3xl font-bold">Baza Znanja</h1>
        <p className="mt-2">Centralni repozitorijum znanja i resursa za elektrodistribuciju</p>
      </div>
      
      <div className="flex-grow p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="flex justify-start overflow-x-auto pb-2">
            <TabsTrigger value="pretraga" className="px-4 py-2">
              <Search className="mr-2 h-4 w-4" />
              Pretraga
            </TabsTrigger>
            <TabsTrigger value="kategorije" className="px-4 py-2">
              <Book className="mr-2 h-4 w-4" />
              Kategorije
            </TabsTrigger>
            <TabsTrigger value="dokumenti" className="px-4 py-2">
              <FileText className="mr-2 h-4 w-4" />
              Dokumenti
            </TabsTrigger>
            <TabsTrigger value="kolaboracija" className="px-4 py-2">
              <Users className="mr-2 h-4 w-4" />
              Kolaboracija
            </TabsTrigger>
            <TabsTrigger value="analitika" className="px-4 py-2">
              <BarChart className="mr-2 h-4 w-4" />
              Analitika
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pretraga">
            <Card>
              <CardHeader>
                <CardTitle>Napredna pretraga</CardTitle>
                <CardDescription>Pretražite bazu znanja koristeći ključne reči ili fraze</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Input placeholder="Unesite ključne reči..." className="flex-grow" />
                  <Button>Pretraži</Button>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Filtriraj po:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Kategorija" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.name}>{category.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Tip dokumenta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uputstvo">Uputstvo</SelectItem>
                        <SelectItem value="procedura">Procedura</SelectItem>
                        <SelectItem value="izvestaj">Izveštaj</SelectItem>
                        <SelectItem value="prezentacija">Prezentacija</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Datum" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nedelja">Poslednja nedelja</SelectItem>
                        <SelectItem value="mesec">Poslednji mesec</SelectItem>
                        <SelectItem value="godina">Poslednja godina</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="kategorije">
            <Card>
              <CardHeader>
                <CardTitle>Kategorije</CardTitle>
                <CardDescription>Pregledajte sadržaj po kategorijama</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <Card key={category.id}>
                      <CardHeader>
                        <CardTitle>{category.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside">
                          {category.subcategories.map((subcategory, index) => (
                            <li key={index}>{subcategory}</li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline">Pregledaj dokumente</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dokumenti">
            <Card>
              <CardHeader>
                <CardTitle>Dokumenti</CardTitle>
                <CardDescription>Pregledajte i upravljajte dokumentima u bazi znanja</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <Input className="max-w-sm" placeholder="Pretraži dokumente..." />
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Dodaj novi dokument
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Naziv dokumenta</TableHead>
                      <TableHead>Kategorija</TableHead>
                      <TableHead>Autor</TableHead>
                      <TableHead>Datum</TableHead>
                      <TableHead>Pregledi</TableHead>
                      <TableHead>Akcije</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentDocuments.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-medium">{doc.title}</TableCell>
                        <TableCell>{doc.category}</TableCell>
                        <TableCell>{doc.author}</TableCell>
                        <TableCell>{doc.date}</TableCell>
                        <TableCell>{doc.views}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Pregledaj</Button>
                            <Button variant="outline" size="sm">Uredi</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="kolaboracija">
            <Card>
              <CardHeader>
                <CardTitle>Kolaboracija</CardTitle>
                <CardDescription>Sarađujte sa kolegama na dokumentima i delite znanje</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Aktivni projekti</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span>Unapređenje SCADA sistema</span>
                          <Badge>U toku</Badge>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Implementacija pametnih brojila</span>
                          <Badge>U toku</Badge>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Revizija sigurnosnih procedura</span>
                          <Badge variant="secondary">Završeno</Badge>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Pridruži se projektu</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Nedavne diskusije</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[200px]">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarImage src="/avatars/01.png" />
                              <AvatarFallback>MP</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">Marko Petrović</p>
                              <p className="text-sm text-gray-500">Kako optimizovati potrošnju u vršnim satima?</p>
                            </div>
                          </div>
                          <Separator />
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarImage src="/avatars/02.png" />
                              <AvatarFallback>AJ</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">Ana Jovanović</p>
                              <p className="text-sm text-gray-500">Predlozi za unapređenje bezbednosti na terenu</p>
                            </div>
                          </div>
                          <Separator />
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarImage src="/avatars/03.png" />
                              <AvatarFallback>NĐ</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">Nikola Đorđević</p>
                              <p className="text-sm text-gray-500">Integracija obnovljivih izvora u distributivnu mrežu</p>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Započni novu diskusiju</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analitika">
            <Card>
              <CardHeader>
                <CardTitle>Analitika korišćenja</CardTitle>
                <CardDescription>Pratite popularnost i korisnost sadržaja u bazi znanja</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Ukupno dokumenata</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,284</div>
                      <p className="text-xs text-muted-foreground">+7% u odnosu na prošli mesec</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Aktivni korisnici</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">573</div>
                      <p className="text-xs text-muted-foreground">+12% u odnosu na prošli mesec</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Pregledi sadržaja</CardTitle>
                      <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">15,392</div>
                      <p className="text-xs text-muted-foreground">+23% u odnosu na prošli mesec</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Prosečno vreme čitanja</CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5m 32s</div>
                      <p className="text-xs text-muted-foreground">-8% u odnosu na prošli mesec</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Najpopularniji dokumenti</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Naziv dokumenta</TableHead>
                        <TableHead>Pregledi</TableHead>
                        <TableHead>Lajkovi</TableHead>
                        <TableHead>Komentari</TableHead>
                        <TableHead>Tagovi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Uputstvo za održavanje transformatora</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <BarChart className="mr-2 h-4 w-4" />
                            2,345
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <ThumbsUp className="mr-2 h-4 w-4" />
                            187
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            56
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Tag className="mr-2 h-4 w-4" />
                            <Badge variant="secondary" className="mr-1">Transformatori</Badge>
                            <Badge variant="secondary">Održavanje</Badge>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Procedura za rad na visini</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <BarChart className="mr-2 h-4 w-4" />
                            1,987
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <ThumbsUp className="mr-2 h-4 w-4" />
                            156
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            42
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Tag className="mr-2 h-4 w-4" />
                            <Badge variant="secondary" className="mr-1">Bezbednost</Badge>
                            <Badge variant="secondary">Procedura</Badge>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}