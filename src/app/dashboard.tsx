"use client";

import { useState, useEffect } from 'react'
import { Bell, Book, Award, ChevronDown, Clipboard, Database, BarChart, MessageSquare, Users, Briefcase, FileText, Zap, Calendar, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import dynamic from 'next/dynamic'

const CompetencyDatabase = dynamic(() => import('./competency-database/competency-database'), { ssr: false })
const OnlineLearning = dynamic(() => import('./online-learning/online-learning'), { ssr: false })
const AIHRAssistant = dynamic(() => import('./aihrassistant/AIHRAssistant'), { ssr: false })
const OnlineTesting = dynamic(() => import('./online-testing/online-testing'), { ssr: false })
const BazaZnanja = dynamic(() => import('./baza-znanja/baza-znanja'), { ssr: false })
const PracenjeSertifikata = dynamic(() => import('./Pracenje-sertifikata/PracenjeSertifikata'), { ssr: false })
const Anketiranje = dynamic(() => import('./anketiranje/anketiranje'), { ssr: false })
const Onboarding = dynamic(() => import('./onboarding/onboarding'), { ssr: false })
const UpravljanjeTalentima = dynamic(() => import('./upravljanje-talentima/upravljanje-talentima'), { ssr: false })

export default function Dashboard() {
  const [isClient, setIsClient] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [activeModule, setActiveModule] = useState('dashboard')

  useEffect(() => {
    setIsClient(true)
  }, [])

  const modules = [
    { name: 'Dashboard', icon: <TrendingUp className="w-6 h-6" />, path: 'dashboard' },
    { name: 'Baza kompetencija', icon: <Database className="w-6 h-6" />, path: 'competency-database' },
    { name: 'Online učenje', icon: <Book className="w-6 h-6" />, path: 'online-learning' },
    { name: 'Online testiranje', icon: <Clipboard className="w-6 h-6" />, path: 'online-testing' },
    { name: 'Baza znanja', icon: <FileText className="w-6 h-6" />, path: 'baza-znanja' }, 
    { name: 'Praćenje sertifikata', icon: <Award className="w-6 h-6" />, path: 'certificate-tracking' },
    { name: 'Anketiranje', icon: <MessageSquare className="w-6 h-6" />, path: 'surveying' },
    { name: 'Onboarding', icon: <Users className="w-6 h-6" />, path: 'onboarding' },
    { name: 'Upravljanje talentima', icon: <Briefcase className="w-6 h-6" />, path: 'talent-management' },
    { name: 'AI Asistent', icon: <Zap className="w-6 h-6" />, path: 'ai-assistant' },
  ]

  if (!isClient) {
    return null // ili neki placeholder sadržaj
  }

  return (
    <>
      {isClient && (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <aside className="w-64 bg-blue-900 text-white">
            <div className="p-4">
              <h1 className="text-2xl font-bold">HR Razvoj</h1>
            </div>
            <nav className="mt-4">
              {modules.map((module, index) => (
                <button
                  key={index}
                  onClick={() => setActiveModule(module.path)}
                  className="flex items-center px-4 py-2 text-white hover:bg-blue-800 transition-colors w-full text-left"
                >
                  {module.icon}
                  <span className="ml-2">{module.name}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            {/* Header */}
            <header className="bg-blue-900 shadow-sm">
              <div className="flex items-center justify-between px-4 py-3">
                <h2 className="text-xl font-semibold text-white">Dashboard</h2>
                <div className="flex items-center">
                  <button className="p-1 mr-4 text-white hover:text-blue-200 transition-colors" aria-label="Obaveštenja">
                    <Bell className="w-6 h-6" />
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className="flex items-center focus:outline-none text-white"
                      aria-haspopup="true"
                      aria-expanded={isUserMenuOpen}
                    >
                      <img
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman%20pic%202-gSN7PvwteaPSJD5vgamH5zywzrkGgx.webp"
                        alt="Avatar korisnika"
                      />
                      <span className="ml-2 text-sm font-medium">Ana Petrović</span>
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Podešavanja</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Odjava</a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </header>

            {/* Dashboard content */}
            <div className="p-6">
              {activeModule === 'dashboard' && <DashboardHome />}
              {activeModule === 'competency-database' && <CompetencyDatabase />}
              {activeModule === 'online-learning' && <OnlineLearning />}
              {activeModule === 'online-testing' && <OnlineTesting />}
              {activeModule === 'ai-assistant' && <AIHRAssistant />}
              {activeModule === 'baza-znanja' && <BazaZnanja />}
              {activeModule === 'certificate-tracking' && <PracenjeSertifikata />}
              {activeModule === 'surveying' && <Anketiranje />}
              {activeModule === 'onboarding' && <Onboarding />}
              {activeModule === 'talent-management' && <UpravljanjeTalentima />}
            </div>
          </main>
        </div>
      )}
    </>
  )
}

function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ukupno zaposlenih</CardTitle>
          <Users className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234</div>
          <p className="text-xs text-gray-500">+5.2% od prošlog meseca</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Prosečna ocena obuke</CardTitle>
          <TrendingUp className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.6</div>
          <p className="text-xs text-gray-500">+0.3 od prošlog kvartala</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Otvorene pozicije</CardTitle>
          <Briefcase className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">23</div>
          <p className="text-xs text-gray-500">8 novih ove nedelje</p>
        </CardContent>
      </Card>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Nedavne aktivnosti</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                <span>Nova obuka "Liderstvo 101" je dostupna</span>
              </li>
              <li className="flex items-center">
                <Users className="h-4 w-4 text-blue-500 mr-2" />
                <span>5 novih zaposlenih je završilo onboarding</span>
              </li>
              <li className="flex items-center">
                <Award className="h-4 w-4 text-green-500 mr-2" />
                <span>Marko Marković je stekao sertifikat "Project Management"</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Predstojeći zadaci</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Calendar className="h-4 w-4 text-red-500 mr-2" />
                <span>Intervjui za poziciju Senior Developer (3 dana)</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-4 w-4 text-blue-500 mr-2" />
                <span>Kvartalni pregled performansi (1 nedelja)</span>
              </li>
              <li className="flex items-center">
                <Book className="h-4 w-4 text-green-500 mr-2" />
                <span>Lansiranje nove obuke "Digitalna transformacija" (2 nedelje)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Napredak obuke zaposlenih</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Tehnička obuka</span>
                <span className="text-sm font-medium">75%</span>
              </div>
              <Progress value={75} className="mt-2" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Soft skills</span>
                <span className="text-sm font-medium">60%</span>
              </div>
              <Progress value={60} className="mt-2" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Usklađenost i etika</span>
                <span className="text-sm font-medium">90%</span>
              </div>
              <Progress value={90} className="mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}