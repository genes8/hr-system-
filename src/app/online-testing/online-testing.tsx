'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { PlusCircle, Edit, Trash2, FileText, CheckCircle, XCircle, BarChart, Clock, Shield, Zap, Book, Brain, Users, PlayCircle } from 'lucide-react'

export default function OnlineTesting() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const testTypes = [
    { name: 'Psihološki test', icon: <Brain className="w-4 h-4" /> },
    { name: 'Edukativni test', icon: <Book className="w-4 h-4" /> },
    { name: 'Test zaštite na radu', icon: <Shield className="w-4 h-4" /> },
    { name: 'Test zaštite od požara', icon: <Zap className="w-4 h-4" /> },
  ]

  const recentTests = [
    { id: 1, name: 'Osnove elektrodistribucije', type: 'Edukativni', participants: 45, avgScore: 78 },
    { id: 2, name: 'Procena rizika na terenu', type: 'Zaštita na radu', participants: 30, avgScore: 92 },
    { id: 3, name: 'Liderske veštine', type: 'Psihološki', participants: 15, avgScore: 85 },
    { id: 4, 'Protivpožarna zaštita': 'Zaštita od požara', participants: 50, avgScore: 88 },
  ]

  const sampleTest = [
    {
      question: "Koji je osnovni princip rada transformatora?",
      answers: [
        "Elektromagnetna indukcija",
        "Termoelektrični efekat",
        "Fotoelektrični efekat",
        "Piezoelektrični efekat"
      ],
      correctAnswer: 0
    },
    {
      question: "Šta je glavna funkcija osigurača u električnom kolu?",
      answers: [
        "Pojačavanje struje",
        "Smanjenje napona",
        "Zaštita od preopterećenja",
        "Povećanje otpora"
      ],
      correctAnswer: 2
    },
    {
      question: "Koja je jedinica za merenje električne snage?",
      answers: [
        "Amper",
        "Volt",
        "Om",
        "Vat"
      ],
      correctAnswer: 3
    }
  ]

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    })
  }

  const handleSubmitTest = () => {
    setShowResults(true)
  }

  const calculateScore = () => {
    let correctAnswers = 0
    sampleTest.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++
      }
    })
    return (correctAnswers / sampleTest.length) * 100
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-900 text-white p-4">
        <h1 className="text-3xl font-bold">Online Testiranje</h1>
        <p className="mt-2">Napredni sistem za procenu znanja i veština u elektrodistribuciji</p>
      </div>
      
      <div className="flex-grow p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="flex justify-start overflow-x-auto pb-2">
            <TabsTrigger value="dashboard" className="px-4 py-2">
              <BarChart className="mr-2 h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="create-test" className="px-4 py-2">
              <PlusCircle className="mr-2 h-4 w-4" />
              Kreiraj test
            </TabsTrigger>
            <TabsTrigger value="question-bank" className="px-4 py-2">
              <FileText className="mr-2 h-4 w-4" />
              Baza pitanja
            </TabsTrigger>
            <TabsTrigger value="results" className="px-4 py-2">
              <CheckCircle className="mr-2 h-4 w-4" />
              Rezultati
            </TabsTrigger>
            <TabsTrigger value="sample-test" className="px-4 py-2">
              <PlayCircle className="mr-2 h-4 w-4" />
              Primer testa
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard testiranja</CardTitle>
                <CardDescription>Pregled aktivnosti i performansi testiranja</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Ukupno testova</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-muted-foreground">+2 nova ove nedelje</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Aktivni učesnici</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">187</div>
                      <p className="text-xs text-muted-foreground">+23% u odnosu na prošli mesec</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Prosečan rezultat</CardTitle>
                      <BarChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">76%</div>
                      <Progress value={76} className="mt-2" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Stopa završetka</CardTitle>
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">92%</div>
                      <Progress value={92} className="mt-2" />
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Nedavni testovi</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Naziv testa</TableHead>
                        <TableHead>Tip</TableHead>
                        <TableHead>Učesnici</TableHead>
                        <TableHead>Prosečan rezultat</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentTests.map((test) => (
                        <TableRow key={test.id}>
                          <TableCell className="font-medium">{test.name}</TableCell>
                          <TableCell>{test.type}</TableCell>
                          <TableCell>{test.participants}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <span className="mr-2">{test.avgScore}%</span>
                              <Progress value={test.avgScore} className="w-[60px]" />
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="create-test">
            <Card>
              <CardHeader>
                <CardTitle>Kreiraj novi test</CardTitle>
                <CardDescription>Dizajnirajte prilagođeni test za vašu organizaciju</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="test-name" className="text-sm font-medium">Naziv testa</label>
                    <Input id="test-name" placeholder="Unesite naziv testa" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tip testa</label>
                    <div className="flex flex-wrap gap-2">
                      {testTypes.map((type, index) => (
                        <Button key={index} variant="outline" className="flex items-center">
                          {type.icon}
                          <span className="ml-2">{type.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time-limit" className="text-sm font-medium">Vremensko ograničenje (minuti)</label>
                    <Input id="time-limit" type="number" placeholder="Unesite vremensko ograničenje" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Sigurnosne opcije</label>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline">Randomizacija pitanja</Button>
                      <Button variant="outline">Onemogući kopiranje</Button>
                      <Button variant="outline">Proctoring</Button>
                    </div>
                  </div>
                  <Button>Kreiraj test</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="question-bank">
            <Card>
              <CardHeader>
                <CardTitle>Baza pitanja</CardTitle>
                <CardDescription>Upravljajte i organizujte pitanja za testove</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <Input className="max-w-sm" placeholder="Pretraži pitanja..." />
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Dodaj novo pitanje
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Pitanje</TableHead>
                      <TableHead>Kategorija</TableHead>
                      <TableHead>Težina</TableHead>
                      <TableHead>Akcije</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Koji je osnovni princip rada transformatora?</TableCell>
                      <TableCell>
                        <Badge>Elektrotehnika</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Srednje</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Navedite tri glavna tipa električnih kola.</TableCell>
                      <TableCell>
                        <Badge>Osnove elektrotehnike</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Lako</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Objasnite koncept pametnih mreža u elektrodistribuciji.</TableCell>
                      <TableCell>
                        <Badge>Napredne tehnologije</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Teško</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="results">
            <Card>
              <CardHeader>
                <CardTitle>Rezultati testiranja</CardTitle>
                <CardDescription>Analiza performansi i uvidi u rezultate testova</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Nedavni rezultati</h3>
                    <Button variant="outline">Izvezi izveštaj</Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Zaposleni</TableHead>
                        <TableHead>Test</TableHead>
                        <TableHead>Rezultat</TableHead>
                        <TableHead>Datum</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src="/avatars/01.png" />
                              <AvatarFallback>MJ</AvatarFallback>
                            </Avatar>
                            <span>Marko Jovanović</span>
                          </div>
                        </TableCell>
                        <TableCell>Osnove elektrodistribucije</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className="mr-2">85%</span>
                            <Progress value={85} className="w-[60px]" />
                          </div>
                        </TableCell>
                        <TableCell>2023-06-15</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500 text-white">Položio</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src="/avatars/02.png" />
                              <AvatarFallback>AP</AvatarFallback>
                            </Avatar>
                            <span>Ana Petrović</span>
                          </div>
                        </TableCell>
                        <TableCell>Zaštita na radu</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className="mr-2">92%</span>
                            <Progress value={92} className="w-[60px]" />
                          </div>
                        </TableCell>
                        <TableCell>2023-06-14</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500 text-white">Položila</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src="/avatars/03.png" />
                              <AvatarFallback>NM</AvatarFallback>
                            </Avatar>
                            <span>Nikola Mihajlović</span>
                          </div>
                        </TableCell>
                        <TableCell>Napredne tehnologije u elektrodistribuciji</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className="mr-2">68%</span>
                            <Progress value={68} className="w-[60px]" />
                          </div>
                        </TableCell>
                        <TableCell>2023-06-13</TableCell>
                        <TableCell>
                          <Badge variant="destructive">Nije položio</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sample-test">
            <Card>
              <CardHeader>
                <CardTitle>Primer testa</CardTitle>
                <CardDescription>Isprobajte kako funkcioniše online test</CardDescription>
              </CardHeader>
              <CardContent>
                {!showResults ? (
                  <div className="space-y-4">
                    <div className="text-lg font-semibold">
                      Pitanje {currentQuestion + 1} od {sampleTest.length}
                    </div>
                    <div className="text-xl">{sampleTest[currentQuestion].question}</div>
                    <RadioGroup
                      onValueChange={(value) => handleAnswerSelect(currentQuestion, parseInt(value))}
                      value={selectedAnswers[currentQuestion]?.toString()}
                    >
                      {sampleTest[currentQuestion].answers.map((answer, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <RadioGroupItem value={index.toString()} id={`answer-${index}`} />
                          <Label htmlFor={`answer-${index}`}>{answer}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-2xl font-bold">Rezultati testa</div>
                    <div className="text-xl">
                      Vaš rezultat: {calculateScore().toFixed(2)}%
                    </div>
                    <Progress value={calculateScore()} className="w-full" />
                    <div>
                      Tačni odgovori: {sampleTest.filter((_, index) => selectedAnswers[index] === sampleTest[index].correctAnswer).length} od {sampleTest.length}
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {!showResults ? (
                  <>
                    <Button
                      onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                      disabled={currentQuestion === 0}
                    >
                      Prethodno pitanje
                    </Button>
                    {currentQuestion < sampleTest.length - 1 ? (
                      <Button
                        onClick={() => setCurrentQuestion(Math.min(sampleTest.length - 1, currentQuestion + 1))}
                      >
                        Sledeće pitanje
                      </Button>
                    ) : (
                      <Button onClick={handleSubmitTest}>Završi test</Button>
                    )}
                  </>
                ) : (
                  <Button onClick={resetTest}>Ponovi test</Button>
                )}
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}