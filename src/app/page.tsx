'use client';

import { useTheme } from 'next-themes';
import { useTransition, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Moon, Sun, Monitor } from 'lucide-react';

function ThemeContent() {
  const { theme, setTheme, themes } = useTheme();
  const [isPending, startTransition] = useTransition();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-muted p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Welcome Home</h1>
          <p className="text-lg text-muted-foreground">
            Experience seamless theme switching with system preference support
          </p>
        </div>

        {/* Main Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Theme Settings</CardTitle>
            <CardDescription>
              Choose your preferred theme. System will use your device preferences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Current Theme Display */}
            <div className="mb-8 p-4 rounded-lg bg-muted">
              <p className="text-sm text-muted-foreground mb-1">Current Theme</p>
              <p className="text-2xl font-semibold capitalize">
                {isMounted ? theme || 'system' : 'system'}
              </p>
            </div>

            {/* Theme Options */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground">Select a theme:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {themeOptions.map(({ value, label, icon: Icon }) => (
                  <Button
                    key={value}
                    onClick={() => startTransition(() => setTheme(value))}
                    variant={isMounted && theme === value ? 'default' : 'outline'}
                    disabled={isPending}
                    className={`h-24 flex flex-col gap-2 transition-all ${isMounted && theme === value ? 'ring-2 ring-offset-2 ring-primary' : ''
                      }`}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm">{label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="mt-8 p-4 rounded-lg bg-muted space-y-2">
              <p className="text-sm font-medium">Available Themes</p>
              <p className="text-sm text-muted-foreground">
                {themes && themes.length > 0
                  ? `${themes.join(', ')}`
                  : 'System preference will be used'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader className="pb-3">
              <Sun className="h-5 w-5 mb-2 text-yellow-500" />
              <CardTitle className="text-lg">Light Mode</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Bright and clean interface perfect for daytime viewing with reduced eye strain.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Moon className="h-5 w-5 mb-2 text-blue-500" />
              <CardTitle className="text-lg">Dark Mode</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Comfortable dark theme ideal for low-light environments and nighttime use.
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <Monitor className="h-5 w-5 mb-2 text-slate-500" />
              <CardTitle className="text-lg">System</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Automatically follows your device settings for the best experience.
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Your theme preference is automatically saved</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return <ThemeContent />;
}
